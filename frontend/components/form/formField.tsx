import { FormFieldProps } from './types';

const baseInputStyles =
  'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed read-only:bg-gray-50 transition-colors';

const errorInputStyles = 'border-red-500 focus:ring-red-500 focus:border-red-500';

const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

const errorTextStyles = 'mt-1 text-sm text-red-600';

const hintTextStyles = 'mt-1 text-sm text-gray-500';

export function FormField({
  config,
  value,
  error,
  showError = true,
  onChange,
  onBlur,
}: FormFieldProps) {
  const {
    name,
    label,
    type,
    placeholder,
    options,
    disabled,
    readOnly,
    autoFocus,
    className,
    hint,
    validation,
  } = config;

  const hasError = showError && error;
  const inputClassName = `${baseInputStyles} ${hasError ? errorInputStyles : ''} ${className || ''}`.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    let newValue: string | number | boolean;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      newValue = target.checked;
    } else if (type === 'number') {
      newValue = target.value === '' ? '' : Number(target.value);
    } else {
      newValue = target.value;
    }

    onChange(name, newValue);
  };

  const handleBlur = () => {
    onBlur?.(name);
  };

  const renderInput = () => {
    const commonProps = {
      id: name,
      name,
      disabled,
      onBlur: handleBlur,
      autoFocus,
    };

    switch (type) {
      case 'select':
        return (
          <select
            {...commonProps}
            value={String(value)}
            onChange={handleChange}
            className={inputClassName}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={hasError ? `${name}-error` : hint ? `${name}-hint` : undefined}
          >
            <option value="">{placeholder || 'Select an option'}</option>
            {options?.map((option) => (
              <option
                key={String(option.value)}
                value={String(option.value)}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <textarea
            {...commonProps}
            value={String(value)}
            onChange={handleChange}
            placeholder={placeholder}
            readOnly={readOnly}
            rows={4}
            className={inputClassName}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={hasError ? `${name}-error` : hint ? `${name}-hint` : undefined}
          />
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              {...commonProps}
              type="checkbox"
              checked={Boolean(value)}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
              aria-invalid={hasError ? 'true' : undefined}
              aria-describedby={hasError ? `${name}-error` : hint ? `${name}-hint` : undefined}
            />
            <label htmlFor={name} className="ml-2 text-sm text-gray-700">
              {label}
              {validation?.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2" role="radiogroup" aria-labelledby={`${name}-label`}>
            {options?.map((option) => (
              <div key={String(option.value)} className="flex items-center">
                <input
                  id={`${name}-${option.value}`}
                  name={name}
                  type="radio"
                  value={String(option.value)}
                  checked={value === option.value}
                  onChange={handleChange}
                  disabled={disabled || option.disabled}
                  onBlur={handleBlur}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 disabled:opacity-50"
                  aria-invalid={hasError ? 'true' : undefined}
                />
                <label
                  htmlFor={`${name}-${option.value}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <input
            {...commonProps}
            type={type}
            value={String(value)}
            onChange={handleChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className={inputClassName}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={hasError ? `${name}-error` : hint ? `${name}-hint` : undefined}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      {type !== 'checkbox' && (
        <label htmlFor={name} id={type === 'radio' ? `${name}-label` : undefined} className={labelStyles}>
          {label}
          {validation?.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {renderInput()}

      {hasError && (
        <p id={`${name}-error`} className={errorTextStyles} role="alert">
          {error}
        </p>
      )}

      {!hasError && hint && (
        <p id={`${name}-hint`} className={hintTextStyles}>
          {hint}
        </p>
      )}
    </div>
  );
}
