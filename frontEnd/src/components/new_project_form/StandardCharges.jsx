import React from 'react';

function StandardCharges() {
  const charges = [
    { label: 'Parking', id: 'parking' },
    { label: 'Society Formation', id: 'society' },
    { label: 'Development Charge', id: 'development' },
    { label: 'Legal Charge', id: 'legal' },
    { label: 'Maintenance (per sq ft)', id: 'maintenance' },
    { label: 'Infrastructure Charge', id: 'infrastructure' }
  ];

  return (
    <div className="sm:col-span-6">
      <label className="block text-sm font-medium text-gray-700">Standard Charges</label>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {charges.map(({ label, id }) => (
          <div key={id}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type="number"
              id={id}
              className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StandardCharges;