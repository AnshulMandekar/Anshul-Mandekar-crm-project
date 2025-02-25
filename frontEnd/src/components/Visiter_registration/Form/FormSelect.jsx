import React from 'react';

export default function FormSelect({
  label,
  required = false,
  name,
  value,
  onChange,
  options,
  className = '',
}) {
  return (
    <div className={className}>
      <label className="form-label">{label}</label>
      <select
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}