import React from 'react';

const StatCard = ({ icon, title, value, bgColor, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <i className={`fas ${icon} ${iconColor}`}></i>
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;