import React from 'react';

const FilterSection = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Industry</label>
        <select className="mt-1 block w-full rounded-lg border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-600 focus:outline-none focus:ring-indigo-600">
          <option>All Industries</option>
          <option>Technology</option>
          <option>Healthcare</option>
          <option>Finance</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Lead Value</label>
        <select className="mt-1 block w-full rounded-lg border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-600 focus:outline-none focus:ring-indigo-600">
          <option>All Values</option>
          <option>High Value</option>
          <option>Medium Value</option>
          <option>Low Value</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Last Contact</label>
        <select className="mt-1 block w-full rounded-lg border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-600 focus:outline-none focus:ring-indigo-600">
          <option>Any Time</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;