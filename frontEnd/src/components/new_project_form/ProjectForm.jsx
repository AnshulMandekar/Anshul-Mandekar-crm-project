import React, { useState } from 'react';
import UnitTypes from './UnitTypes';
import Amenities from './Amenities';
import Documents from './Documents';
import StandardCharges from './StandardCharges';
import './ProjectFrom.css';

function ProjectForm() {
  const [projectData, setProjectData] = useState({
    projectType: '',
    landArea: '',
    landAreaUnit: 'sq.ft',
    projectAddress: '',
    numberOfBuildings: '',
    numberOfPhases: '',
    flatsPerFloor: '',
    asrRate: '',
    reraNumber: '',
    bankAccountDetails: '',
    projectBrochure: null,
    amenities: [],
    documents: [],
    standardCharges: {
      parking: '',
      society: '',
      development: '',
      legal: '',
      maintenance: '',
      infrastructure: '',
    },
  });

  const [message, setMessage] = useState(''); // For API response messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProjectData({ ...projectData, projectBrochure: e.target.files[0] });
  };

  const handleAmenitiesChange = (selectedAmenities) => {
    setProjectData({ ...projectData, amenities: selectedAmenities });
  };

  const handleDocumentsChange = (selectedDocuments) => {
    setProjectData({ ...projectData, documents: selectedDocuments });
  };

  const handleStandardChargesChange = (name, value) => {
    setProjectData({
      ...projectData,
      standardCharges: { ...projectData.standardCharges, [name]: value },
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // Append text fields
    formData.append('typeOfProject', projectData.projectType);
    formData.append('areaOfLand', `${projectData.landArea} ${projectData.landAreaUnit}`);
    formData.append('address', projectData.projectAddress);
    formData.append('numberOfBuildings', projectData.numberOfBuildings);
    formData.append('numberOfPhases', projectData.numberOfPhases);
    formData.append('flatsPerFloor', projectData.flatsPerFloor);
    formData.append('currentASRRate', projectData.asrRate);
    formData.append('RERANumber', projectData.reraNumber);
    formData.append('amenities', JSON.stringify(projectData.amenities));
    formData.append('otherCharges', JSON.stringify(projectData.standardCharges));

    // Append files
    if (projectData.projectBrochure) {
      formData.append('projectBrochure', projectData.projectBrochure);
    }

    // Append documents (if any)
    projectData.documents.forEach((doc) => {
      if (doc.file) {
        formData.append(doc.name, doc.file);
      }
    });

    try {
      const response = await fetch('/api/projects/create', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Project created successfully!');
        console.log('Project created:', result.project);
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage('Error submitting the form. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Create New Project</h2>
          <p className="mt-1 text-sm text-gray-600">Fill in the project details to create a new real estate project.</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Existing form fields */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Project Type</label>
              <select
                name="projectType"
                value={projectData.projectType}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button Anshul-css"
              >
                <option value="">Select Project Type</option>
                <option value="Mixed Use Development">Mixed Use Development</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Other form fields... */}

            <Amenities onChange={handleAmenitiesChange} />
            <Documents onChange={handleDocumentsChange} />
            <StandardCharges onChange={handleStandardChargesChange} />

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">Project Brochure</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 !rounded-button p-2"
              />
            </div>
          </div>

          {/* Display API response message */}
          {message && (
            <div className="mt-4 p-4 text-sm text-center rounded-lg" style={{ backgroundColor: message.includes('Error') ? '#FEE2E2' : '#D1FAE5', color: message.includes('Error') ? '#DC2626' : '#065F46' }}>
              {message}
            </div>
          )}

          <div className="pt-5">
            <div className="flex justify-end">
              <button type="button" className="!rounded-button bg-white py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
              <button type="button" onClick={handleSubmit} className="!rounded-button ml-3 bg-custom border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-custom">Save Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;