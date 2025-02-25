import React from 'react';

function FormSection({ title, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

export default FormSection;