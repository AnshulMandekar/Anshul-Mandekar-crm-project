import React from 'react';

function Amenities({ selectedAmenities, onChange }) {
  const amenities = ['Swimming Pool', 'Gym', 'Club House', 'Garden'];

  const handleCheckboxChange = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((item) => item !== amenity)
      : [...selectedAmenities, amenity];
    onChange(updatedAmenities);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Amenities</label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {amenities.map((amenity) => (
          <label key={amenity} className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-blue-500">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleCheckboxChange(amenity)}
            />
            <span className="text-sm">{amenity}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Amenities;