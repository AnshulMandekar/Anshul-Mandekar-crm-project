import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="flex items-center">
        <button className="relative p-2 text-gray-400 hover:text-gray-500 mr-4">
          <i className="fas fa-bell w-6 h-6"></i>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
        </button>
        <img 
          src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person in business attire with a neutral expression against a light background&width=40&height=40" 
          alt="User" 
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;