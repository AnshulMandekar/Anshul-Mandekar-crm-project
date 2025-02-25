import React from 'react';

function UnitTypes() {
  const units = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];

  return (
    <div className="sm:col-span-6">
      <label className="block text-sm font-medium text-gray-700">Unit Types</label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {units.map((unit) => (
          <label key={unit} className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-custom">
            <input type="checkbox" className="absolute h-4 w-4 top-2 right-2" />
            <span className="text-sm">{unit}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default UnitTypes;