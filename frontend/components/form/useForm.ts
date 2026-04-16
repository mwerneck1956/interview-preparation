'use client';

import { useState, useCallback, useRef } from 'react';
import {
  FormValues,
  FormErrors,
  TouchedFields,
  FormFieldConfig,
  ValidationRule,
  UseFormReturn,
} from './types';

function getValidationValue<T>(
  rule: T | { value: T; message: string } | undefined
): T | undefined {
  if (rule === undefined) return undefined;
  if (typeof rule === 'object' && rule !== null && 'value' in rule) {
    return rule.value;
  }
  return rule as T;
}

function getValidationMessage<T>(
  rule: T | { value: T; message: string } | undefined,
  defaultMessage: string
): string {
  if (rule === undefined) return defaultMessage;
  if (typeof rule === 'object' && rule !== null && 'message' in rule) {
    return rule.message;
  }
  return defaultMessage;
}

export function validateFieldValue(
  value: unknown,
  validation: ValidationRule | undefined,
  allValues: FormValues
): string | undefined {
  if (!validation) return undefined;

  const stringValue = String(value ?? '');
  const numValue = typeof value === 'number' ? value : Number(value);

  // Required validation
  if (validation.required) {
    const isEmpty = value === '' || value === undefined || value === null;
    const isUncheckedCheckbox = typeof value === 'boolean' && !value;

    if (isEmpty || isUncheckedCheckbox) {
      return typeof validation.required === 'string'
        ? validation.required
        : 'This field is required';
    }
  }

  // Skip other validations if value is empty and not required
  if (stringValue === '') return undefined;

  // MinLength validation
  const minLength = getValidationValue(validation.minLength);
  if (minLength !== undefined && stringValue.length < minLength) {
    return getValidationMessage(
      validation.minLength,
      `Minimum ${minLength} characters required`
    );
  }

  // MaxLength validation
  const maxLength = getValidationValue(validation.maxLength);
  if (maxLength !== undefined && stringValue.length > maxLength) {
    return getValidationMessage(
      validation.maxLength,
      `Maximum ${maxLength} characters allowed`
    );
  }

  // Min validation
  const min = getValidationValue(validation.min);
  if (min !== undefined && !isNaN(numValue) && numValue < min) {
    return getValidationMessage(validation.min, `Value must be at least ${min}`);
  }

  // Max validation
  const max = getValidationValue(validation.max);
  if (max !== undefined && !isNaN(numValue) && numValue > max) {
    return getValidationMessage(validation.max, `Value must be at most ${max}`);
  }

  // Pattern validation
  const pattern = getValidationValue(validation.pattern);
  if (pattern !== undefined) {
    const regex = new RegExp(pattern);
    if (!regex.test(stringValue)) {
      return getValidationMessage(validation.pattern, 'Invalid format');
    }
  }

  // Custom validation
  if (validation.custom) {
    return validation.custom(value, allValues);
  }

  return undefined;
}

function getInitialValues(
  fields: FormFieldConfig[],
  initialValues?: FormValues
): FormValues {
  const values: FormValues = {};

  for (const field of fields) {
    if (initialValues && field.name in initialValues) {
      values[field.name] = initialValues[field.name];
    } else if (field.defaultValue !== undefined) {
      values[field.name] = field.defaultValue;
    } else {
      values[field.name] = field.type === 'checkbox' ? false : '';
    }
  }

  return values;
}

interface UseFormConfig {
  fields: FormFieldConfig[];
  initialValues?: FormValues;
  onSubmit: (values: FormValues) => void | Promise<void>;
  onChange?: (values: FormValues) => void;
  onError?: (errors: FormErrors) => void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export function useForm({
  fields,
  initialValues,
  onSubmit,
  onChange,
  onError,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFormConfig): UseFormReturn {
  const [values, setValues] = useState<FormValues>(() =>
    getInitialValues(fields, initialValues)
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValuesRef = useRef(getInitialValues(fields, initialValues));
  const fieldsRef = useRef(fields);
  fieldsRef.current = fields;

  const isDirty = Object.keys(values).some(
    (key) => values[key] !== initialValuesRef.current[key]
  );

  const isValid = Object.keys(errors).length === 0;

  const validateField = useCallback(
    (name: string): string | undefined => {
      const field = fieldsRef.current.find((f) => f.name === name);
      if (!field) return undefined;

      return validateFieldValue(values[name], field.validation, values);
    },
    [values]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    for (const field of fieldsRef.current) {
      const error = validateFieldValue(values[field.name], field.validation, values);
      if (error) {
        newErrors[field.name] = error;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      onError?.(newErrors);
      return false;
    }

    return true;
  }, [values, onError]);

  const handleChange = useCallback(
    (name: string, value: string | number | boolean) => {
      setValues((prev) => {
        const newValues = { ...prev, [name]: value };
        onChange?.(newValues);
        return newValues;
      });

      if (validateOnChange) {
        const field = fieldsRef.current.find((f) => f.name === name);
        if (field) {
          const newValues = { ...values, [name]: value };
          const error = validateFieldValue(value, field.validation, newValues);
          setErrors((prev) => {
            if (error) {
              return { ...prev, [name]: error };
            }
            const { [name]: _, ...rest } = prev;
            return rest;
          });
        }
      } else {
        // Clear error when user starts typing
        setErrors((prev) => {
          if (prev[name]) {
            const { [name]: _, ...rest } = prev;
            return rest;
          }
          return prev;
        });
      }
    },
    [onChange, validateOnChange, values]
  );

  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }));

      if (validateOnBlur) {
        const error = validateField(name);
        setErrors((prev) => {
          if (error) {
            return { ...prev, [name]: error };
          }
          const { [name]: _, ...rest } = prev;
          return rest;
        });
      }
    },
    [validateOnBlur, validateField]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched: TouchedFields = {};
      for (const field of fieldsRef.current) {
        allTouched[field.name] = true;
      }
      setTouched(allTouched);

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateForm, onSubmit, values]
  );

  const setFieldValue = useCallback(
    (name: string, value: string | number | boolean) => {
      handleChange(name, value);
    },
    [handleChange]
  );

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const reset = useCallback(
    (newValues?: FormValues) => {
      const resetValues = newValues
        ? getInitialValues(fieldsRef.current, newValues)
        : initialValuesRef.current;

      setValues(resetValues);
      setErrors({});
      setTouched({});

      if (newValues) {
        initialValuesRef.current = resetValues;
      }
    },
    []
  );

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    reset,
    validateField,
    validateForm,
  };
}
