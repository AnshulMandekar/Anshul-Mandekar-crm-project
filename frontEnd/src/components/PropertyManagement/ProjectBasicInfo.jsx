import React from 'react';

const ProjectBasicInfo = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Project Basic Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName || ''}
            onChange={handleChange}
            placeholder="Enter project name"
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType || ''}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
          >
            <option value="" disabled>Select property type</option>
            <option>Mixed Use</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Villa</option>
            <option>IT/ITES</option>
            <option>Warehouse</option>
          </select>
        </div>

        {/* Area of Land */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Area of Land (sq ft)
          </label>
          <input
            type="number"
            name="areaOfLand"
            value={formData.areaOfLand || ''}
            onChange={handleChange}
            min="0"
            placeholder="Enter area in sq ft"
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Project Address */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Project Address
          </label>
          <textarea
            rows={3}
            name="projectAddress"
            value={formData.projectAddress || ''}
            onChange={handleChange}
            placeholder="Enter full project address"
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Project Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Start Date
          </label>
          <input
            type="date"
            name="projectStartDate"
            value={formData.projectStartDate || ''}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Expected Completion Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expected Completion Date
          </label>
          <input
            type="date"
            name="expectedCompletionDate"
            value={formData.expectedCompletionDate || ''}
            onChange={handleChange}
            min={formData.projectStartDate || ''}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Geo Tag */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Geo Tag of Land
          </label>
          <input
            type="text"
            name="geoTag"
            value={formData.geoTag || ''}
            onChange={handleChange}
            placeholder="Latitude, Longitude"
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Type of Building */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type of Building
          </label>
          <select
            name="typeOfBuilding"
            value={formData.typeOfBuilding || ''}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
          >
            <option value="" disabled>Select building type</option>
            <option>High Rise</option>
            <option>Low Rise</option>
            <option>Mid Rise</option>
            <option>Skyscraper</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectBasicInfo;
