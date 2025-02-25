import React from 'react';

function Amenities() {
  const amenities = ['Swimming Pool', 'Gym', 'Club House', 'Garden'];

  return (
    <div className="sm:col-span-6">
      <label className="block text-sm font-medium text-gray-700">Amenities</label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {amenities.map((amenity) => (
          <label key={amenity} className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-custom">
            <input type="checkbox" className="absolute h-4 w-4 top-2 right-2" />
            <span className="text-sm">{amenity}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Amenities;