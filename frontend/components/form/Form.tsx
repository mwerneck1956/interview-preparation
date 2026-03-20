'use client';

import { FormField } from './formField';
import { useForm } from './useForm';
import { FormProps } from './types';

const defaultButtonClassName =
  'w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors';

export function Form({
  config,
  onSubmit,
  onChange,
  onError,
  initialValues,
  className,
  validateOnChange = false,
  validateOnBlur = true,
  showSubmitButton = true,
  submitButtonClassName,
  renderSubmit,
  children,
}: FormProps) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    fields: config.fields,
    initialValues,
    onSubmit,
    onChange,
    onError,
    validateOnChange,
    validateOnBlur,
  });

  const renderSubmitButton = () => {
    if (!showSubmitButton) return null;

    if (renderSubmit) {
      return renderSubmit({ isSubmitting, isValid });
    }

    return (
      <button
        type="submit"
        disabled={isSubmitting}
        className={submitButtonClassName || defaultButtonClassName}
      >
        {isSubmitting ? 'Submitting...' : config.submitLabel || 'Submit'}
      </button>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      {config.fields.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          config={fieldConfig}
          value={values[fieldConfig.name]}
          error={errors[fieldConfig.name]}
          touched={touched[fieldConfig.name]}
          showError={touched[fieldConfig.name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}

      {children}

      {renderSubmitButton()}
    </form>
  );
}
