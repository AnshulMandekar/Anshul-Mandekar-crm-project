import React from 'react';

function LeadInformationSection({ formData, handleChange }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-gray-900">Lead Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
          <select 
            id="source" 
            name="source" 
            value={formData.source}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select source</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend">Friend</option>
            <option value="Broker">Broker</option>
          </select>
        </div>
        <div>
          <label htmlFor="typeOfLead" className="block text-sm font-medium text-gray-700">Type of Lead</label>
          <select 
            id="typeOfLead" 
            name="typeOfLead" 
            value={formData.typeOfLead}
            onChange={handleChange}
            required 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select lead type</option>
            <option value="Hot">Hot</option>
            <option value="Cold">Cold</option>
            <option value="Warm">Warm</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interestedProperty" className="block text-sm font-medium text-gray-700">Interested Property</label>
          <input 
            type="text" 
            id="interestedProperty" 
            name="interestedProperty" 
            value={formData.interestedProperty}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
          />
        </div>
      </div>
    </div>
  );
}

export default LeadInformationSection;