import React from 'react';

export default function RadioGroup({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <div className="mt-2 flex space-x-6">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="form-radio"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}