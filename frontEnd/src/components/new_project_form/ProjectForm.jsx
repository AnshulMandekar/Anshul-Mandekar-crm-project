import React from 'react';
import UnitTypes from './UnitTypes';
import Amenities from './Amenities';
import Documents from './Documents';
import StandardCharges from './StandardCharges';
import './ProjectFrom.css';

function ProjectForm() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Create New Project</h2>
          <p className="mt-1 text-sm text-gray-600">Fill in the project details to create a new real estate project.</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Project Type</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button Anshul-css">
                <option>Mixed Use Development</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Land Area</label>
              <div className="mt-1 flex !rounded-button">
                <input type="text" className="flex-1 block w-full border-gray-300 focus:ring-custom focus:border-custom sm:text-sm !rounded-l-button" />
                <select className="!rounded-r-button border-l-0 border-gray-300 bg-gray-50 text-sm">
                  <option>sq.ft</option>
                  <option>acres</option>
                  <option>hectares</option>
                </select>
              </div>
            </div>

            <UnitTypes />

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">Project Address</label>
              <textarea rows="3" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm"></textarea>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Number of Buildings</label>
              <input type="number" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Number of Phases</label>
              <input type="number" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Flats per Floor</label>
              <input type="number" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm" />
            </div>

            <Amenities />

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Current ASR Rate</label>
              <div className="mt-1 relative !rounded-button">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">₹</span>
                </div>
                <input type="text" className="block w-full pl-7 pr-12 border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">/sq.ft</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">RERA Number (Building wise)</label>
              <textarea rows="3" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm"></textarea>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">Bank Account Details (Building wise)</label>
              <textarea rows="3" className="mt-1 block w-full border-gray-300 !rounded-button focus:ring-custom focus:border-custom sm:text-sm"></textarea>
            </div>

            <Documents />

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">Project Brochure</label>
              <input type="file" className="mt-1 block w-full border border-gray-300 !rounded-button p-2" />
            </div>

            <StandardCharges />
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button type="button" className="!rounded-button bg-white py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
                Cancel
              </button>
              <button type="button" className="!rounded-button ml-3 bg-custom border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-custom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
                Save Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;