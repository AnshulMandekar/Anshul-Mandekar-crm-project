import React from 'react';

function PropertyPreferencesSection({ formData, handleChange }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-gray-900">Property Preferences</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="typeOfUnits" className="block text-sm font-medium text-gray-700">Type of Unit</label>
          <select 
            id="typeOfUnits" 
            name="typeOfUnits" 
            value={formData.typeOfUnits}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select unit type</option>
            <option value="Studio">Studio</option>
            <option value="1BHK">1 BHK</option>
            <option value="1.5 BHK">1.5 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="2.5 BHK">2.5 BHK</option>
            <option value="3BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="Row House">Row House</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div>
          <label htmlFor="typeOfProject" className="block text-sm font-medium text-gray-700">Type of Project</label>
          <select 
            id="typeOfProject" 
            name="typeOfProject" 
            value={formData.typeOfProject}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select project type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Plots">Plots</option>
            <option value="Villa">Villa</option>
            <option value="Residential / Commercial">Residential / Commercial</option>
            <option value="IT/ITES">IT/ITES</option>
            <option value="Warehouse">Warehouse</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PropertyPreferencesSection;