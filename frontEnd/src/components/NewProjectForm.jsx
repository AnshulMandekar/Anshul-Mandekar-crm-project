import React, { useState } from 'react';
import UnitTypes from './new_project_form/UnitTypes';
import Amenities from './new_project_form/Amenities';
import Documents from './new_project_form/Documents';
import StandardCharges from './new_project_form/StandardCharges';
import Navbar from './new_project_form/Navbar';
function NewProjectForm() {
  const [projectData, setProjectData] = useState({
    typeOfProject: '',
    areaOfLand: '',
    geoTag: '',
    typeOfUnits: '',
    address: '',
    numberOfBuildings: 0,
    numberOfPhases: 0,
    amenities: [],
    typeOfBuilding: '',
    flatsPerFloor: 0,
    paymentSchedule: '',
    demandLetter: '',
    currentASRRate: 0,
    RERANumber: '',
    bankDetails: {},
    otherCharges: {
      parking: 0,
      societyFormation: 0,
      developmentCharge: 0,
      legalCharge: 0,
      maintenancePerSqFt: 0,
      infrastructureCharge: 0,
    },
  });

  const [message, setMessage] = useState('');

  // Generic input field component
  const InputField = ({ label, name, type = 'text', required = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={projectData[name]}
        onChange={handleChange}
        className={`mt-1 block w-full p-2 border ${
          required && !projectData[name] ? 'border-red-500' : 'border-gray-300'
        } rounded-md`}
        required={required}
      />
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue = ['numberOfBuildings', 'numberOfPhases', 'flatsPerFloor', 'currentASRRate'].includes(name)
      ? Number(value) || 0
      : value;
    setProjectData(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleUnitTypeChange = (unit) => {
    setProjectData(prev => ({ ...prev, typeOfUnits: unit }));
  };

  const handleAmenitiesChange = (amenities) => {
    setProjectData(prev => ({ ...prev, amenities }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = {
      'typeOfProject': 'Project Type',
      'typeOfUnits': 'Unit Type',
      'address': 'Address',
      'numberOfBuildings': 'Number of Buildings',
      'numberOfPhases': 'Number of Phases',
      'flatsPerFloor': 'Flats per Floor'
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !projectData[key])
      .map(([_, label]) => label);

    if (missingFields.length > 0) {
      setMessage(`Error: Please fill required fields - ${missingFields.join(', ')}`);
      return;
    }

    // ... rest of submit logic
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Create New Project</h2>

          {/* Required Fields Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                name="typeOfProject"
                value={projectData.typeOfProject}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Project Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Plots">Plots</option>
                <option value="Villa">Villa</option>
              </select>
            </div>

            {/* Unit Type */}
            <UnitTypes 
              selectedUnit={projectData.typeOfUnits}
              onChange={handleUnitTypeChange}
            />

            {/* Address */}
            <div className="mb-4 col-span-full">
              <label className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={projectData.address}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="3"
                required
              />
            </div>

            {/* Numeric Inputs */}
            <InputField label="Number of Buildings *" name="numberOfBuildings" type="number" required />
            <InputField label="Number of Phases *" name="numberOfPhases" type="number" required />
            <InputField label="Flats per Floor *" name="flatsPerFloor" type="number" required />
          </div>

          {/* Documents Upload */}
          <Documents onDocumentsChange={(field, file) => {
            setProjectData(prev => ({
              ...prev,
              bankDetails: { ...prev.bankDetails, [field]: file }
            }));
          }} />

          {/* Other Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <InputField label="Area of Land" name="areaOfLand" />
            <InputField label="Geo Tag" name="geoTag" />
            <InputField label="Current ASR Rate" name="currentASRRate" type="number" />
            <InputField label="RERA Number" name="RERANumber" />
          </div>

          {/* Amenities */}
          <Amenities 
            selectedAmenities={projectData.amenities}
            onChange={handleAmenitiesChange}
          />

          {/* Standard Charges */}
          <StandardCharges
            charges={projectData.otherCharges}
            onChange={(charges) => setProjectData(prev => ({ ...prev, otherCharges: charges }))}
          />

          {/* Submit Section */}
          <div className="mt-8">
            <div className="p-4 bg-blue-50 rounded-lg mb-4">
              <h4 className="text-sm font-medium text-blue-800">Required Fields</h4>
              <p className="text-xs text-blue-700 mt-1">
                Fields marked with <span className="text-red-500">*</span> are mandatory
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Create Project
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-3 rounded-md ${
              message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewProjectForm;