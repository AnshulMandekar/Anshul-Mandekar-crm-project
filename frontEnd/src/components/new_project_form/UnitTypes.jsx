import React from 'react';

function UnitTypes({ selectedUnit, onChange }) {
  const units = ['Studio', '1BHK', '1.5 BHK', '2BHK', '2.5 BHK', '3BHK', '4 BHK', 'Row House', 'Villa'];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Unit Type <span className="text-red-500">*</span>
      </label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {units.map((unit) => (
          <button
            key={unit}
            type="button"
            onClick={() => onChange(unit)}
            className={`p-2 border rounded-md text-sm ${
              selectedUnit === unit 
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            {unit}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UnitTypes;