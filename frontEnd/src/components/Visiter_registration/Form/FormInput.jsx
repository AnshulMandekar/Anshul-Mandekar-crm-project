import React from 'react';

export default function FormInput({
  label,
  type = 'text',
  required = false,
  pattern,
  maxLength,
  name,
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={className}>
      <label className="form-label">{label}</label>
      <input
        type={type}
        required={required}
        pattern={pattern}
        maxLength={maxLength}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
}