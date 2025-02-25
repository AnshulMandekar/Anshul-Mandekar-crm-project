import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Property Image */}
      <img
        src={property.image}
        className="w-full h-48 object-cover"
        alt={property.title}
      />

      <div className="p-6">
        {/* Title & Location */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
          </div>
          <p className="text-xl font-bold text-custom">Stage {property.stage}</p>
        </div>

        {/* Beds, Baths & Size */}
        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <span className="flex items-center">
            <i className="fas fa-bed mr-2"></i> {property.beds}
          </span>
          <span className="flex items-center">
            <i className="fas fa-bath mr-2"></i> {property.baths}
          </span>
          <span className="flex items-center">
            <i className="fas fa-vector-square mr-2"></i> {property.sqft} sq ft
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Leads & View Details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {property.hotLeads} Hot Leads
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              {property.warmLeads} Warm Leads
            </span>
          </div>
          <button className="rounded bg-custom text-white px-4 py-2 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
