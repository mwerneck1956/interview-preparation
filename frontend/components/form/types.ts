import type { ReactNode } from 'react';

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface ValidationRule {
  required?: boolean | string;
  minLength?: number | { value: number; message: string };
  maxLength?: number | { value: number; message: string };
  min?: number | { value: number; message: string };
  max?: number | { value: number; message: string };
  pattern?: string | { value: string; message: string };
  custom?: (value: unknown, allValues: FormValues) => string | undefined;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  options?: SelectOption[];
  validation?: ValidationRule;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  className?: string;
  hint?: string;
}

export interface FormConfig {
  fields: FormFieldConfig[];
  submitLabel?: string;
  className?: string;
}

export type FormValues = Record<string, string | number | boolean>;

export type FormErrors = Record<string, string>;

export type TouchedFields = Record<string, boolean>;

export interface UseFormOptions {
  initialValues?: FormValues;
  onSubmit: (values: FormValues) => void | Promise<void>;
  onChange?: (values: FormValues) => void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface UseFormReturn {
  values: FormValues;
  errors: FormErrors;
  touched: TouchedFields;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
  handleChange: (name: string, value: string | number | boolean) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setFieldValue: (name: string, value: string | number | boolean) => void;
  setFieldError: (name: string, error: string) => void;
  reset: (newValues?: FormValues) => void;
  validateField: (name: string) => string | undefined;
  validateForm: () => boolean;
}

export interface FormProps {
  config: FormConfig;
  onSubmit: (values: FormValues) => void | Promise<void>;
  onChange?: (values: FormValues) => void;
  onError?: (errors: FormErrors) => void;
  initialValues?: FormValues;
  className?: string;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  showSubmitButton?: boolean;
  submitButtonClassName?: string;
  renderSubmit?: (props: { isSubmitting: boolean; isValid: boolean }) => ReactNode;
  children?: ReactNode;
}

export interface FormFieldProps {
  config: FormFieldConfig;
  value: string | number | boolean;
  error?: string;
  touched?: boolean;
  showError?: boolean;
  onChange: (name: string, value: string | number | boolean) => void;
  onBlur?: (name: string) => void;
}
