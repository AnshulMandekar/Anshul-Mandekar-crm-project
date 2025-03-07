import React from 'react';

const BuildingDetails = ({ formData, handleChange }) => {
  const unitTypes = [
    "Studio",
    "1 BHK",
    "1.5 BHK",
    "2 BHK",
    "2.5 BHK",
    "3 BHK",
    "4 BHK",
    "Row House",
    "Villa",
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Building Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Number of Buildings", name: "numberOfBuildings" },
          { label: "Number of Phases", name: "numberOfPhases" },
          { label: "Flats per Floor", name: "flatsPerFloor" },
          { label: "Total Number of Floors", name: "totalFloors" },
          { label: "Floor Space Index (FSI)", name: "fsi" },
          { label: "Super Built-up Area", name: "superBuiltUpArea" },
        ].map((field) => (
          <div key={field.name} className="p-4 border rounded-lg shadow-sm">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type="number"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md px-3 py-2"
              required
            />
          </div>
        ))}
      </div>

      {/* Unit Types */}
      <div className="mt-8">
        <label className="block text-lg font-medium text-gray-800 mb-3">
          Unit Types
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {unitTypes.map((unitType) => (
            <label
              key={unitType}
              className="flex items-center space-x-3 p-3 border rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <input
                type="checkbox"
                name="unitTypes"
                value={unitType}
                checked={formData.unitTypes.includes(unitType)}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-md border ${
                  formData.unitTypes.includes(unitType)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {formData.unitTypes.includes(unitType) && "✔"}
              </div>
              <span className="text-gray-700">{unitType}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
