import React from 'react';

const Amenities = ({ formData, handleChange }) => {
  const amenitiesList = [
    "Swimming Pool",
    "Gym",
    "Lounge",
    "Parking",
    "Garden",
    "Club House",
    "Kids Play Area",
    "Security",
    "Power Backup",
    "Sports Court",
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Select Amenities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenitiesList.map((amenity) => (
          <label
            key={amenity}
            className="flex items-center space-x-2 p-3 border rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              name="amenities"
              value={amenity}
              checked={formData.amenities.includes(amenity)}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-md border ${
                formData.amenities.includes(amenity) ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {formData.amenities.includes(amenity) && "✔"}
            </div>
            <span className="text-gray-700">{amenity}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
