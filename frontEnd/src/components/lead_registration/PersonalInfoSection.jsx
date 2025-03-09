import React from 'react';

function PersonalInfoSection({ formData, handleChange }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
            pattern="[0-9]{10}" 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoSection;