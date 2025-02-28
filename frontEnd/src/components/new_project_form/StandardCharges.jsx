import React from 'react';

function StandardCharges({ charges, onChange }) {
  const chargeFields = [
    { label: 'Parking', id: 'parking' },
    { label: 'Society Formation', id: 'societyFormation' },
    { label: 'Development Charge', id: 'developmentCharge' },
    { label: 'Legal Charge', id: 'legalCharge' },
    { label: 'Maintenance (per sq ft)', id: 'maintenancePerSqFt' },
    { label: 'Infrastructure Charge', id: 'infrastructureCharge' },
  ];

  const handleChange = (id, value) => {
    onChange({ ...charges, [id]: value });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Standard Charges</label>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {chargeFields.map(({ label, id }) => (
          <div key={id}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type="number"
              value={charges[id]}
              onChange={(e) => handleChange(id, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StandardCharges;