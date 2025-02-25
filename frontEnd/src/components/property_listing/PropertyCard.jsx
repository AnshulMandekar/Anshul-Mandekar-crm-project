import React from "react";
import { motion } from "framer-motion";

const PropertyCard = ({ property }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all"
    >
      {/* Property Image */}
      <img
        src={property.image}
        className="w-full h-56 object-cover"
        alt={property.title}
      />

      {/* Property Details */}
      <div className="p-6">
        {/* Title & Location */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
          <p className="text-gray-600">{property.location}</p>
        </div>

        {/* Property Info */}
        <div className="flex justify-between text-gray-600 mb-4">
          <span>🛏 {property.beds} Beds</span>
          <span>🛁 {property.baths} Baths</span>
          <span>📏 {property.sqft} sq ft</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.map((amenity, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {amenity}
            </motion.span>
          ))}
        </div>

        {/* Leads & Action Button */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-red-500">{property.hotLeads} 🔥 Hot Leads</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
