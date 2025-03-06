import React, { useState } from "react";

const PropertyManagementSystem = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    propertyType: "Mixed Use",
    areaOfLand: "",
    projectAddress: "",
    projectStartDate: "",
    expectedCompletionDate: "",
    geoTag: "",
    typeOfBuilding: "High Rise",
    numberOfBuildings: "",
    numberOfPhases: "",
    flatsPerFloor: "",
    totalFloors: "",
    fsi: "",
    superBuiltUpArea: "",
    unitTypes: [],
    amenities: [],
    currentASRRate: "",
    parkingCharges: "",
    societyFormationFees: "",
    developmentCharges: "",
    legalCharges: "",
    maintenance: "",
    stampDuty: "",
    registrationCharges: "",
    gstRate: "",
    infrastructureCharges: "",
    reraNumber: "",
    bankAccountDetails: "",
    documents: {},
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  // Add the missing handleChange function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'unitTypes' || name === 'amenities') {
        setFormData(prevState => ({
          ...prevState,
          [name]: checked 
            ? [...prevState[name], value] 
            : prevState[name].filter(item => item !== value)
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          [name]: checked
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "documents") {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((file) => {
            formDataToSend.append("documents", file);
          });
        }
      } else if (key === "unitTypes" || key === "amenities") {
        // Handle arrays by converting to JSON string
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch("http://localhost:8000/api/properties", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log("Property saved successfully:", result);
        setSubmitMessage({ 
          type: "success", 
          text: "Property saved successfully to MongoDB!" 
        });
        // Optionally reset form
        // setFormData({ ...initialFormState });
      } else {
        console.error("Failed to save property:", result);
        setSubmitMessage({ 
          type: "error", 
          text: `Failed to save property: ${result.message || 'Unknown error'}` 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage({ 
        type: "error", 
        text: `An error occurred while saving the property: ${error.message}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: Array.from(files),
    }));
  };

  return (
    <div className="bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {submitMessage.text && (
          <div className={`mb-4 p-4 rounded ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {submitMessage.text}
          </div>
        )}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Project Basic Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Project Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                >
                  <option>Mixed Use</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Villa</option>
                  <option>IT/ITES</option>
                  <option>Warehouse</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Area of Land (sq ft)
                </label>
                <input
                  type="number"
                  name="areaOfLand"
                  value={formData.areaOfLand}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-gray-700">
                  Project Address
                </label>
                <textarea
                  rows="3"
                  name="projectAddress"
                  value={formData.projectAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Start Date
                </label>
                <input
                  type="date"
                  name="projectStartDate"
                  value={formData.projectStartDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expected Completion Date
                </label>
                <input
                  type="date"
                  name="expectedCompletionDate"
                  value={formData.expectedCompletionDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Geo Tag of Land
                </label>
                <input
                  type="text"
                  name="geoTag"
                  value={formData.geoTag}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  placeholder="Latitude, Longitude"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type of Building
                </label>
                <select
                  name="typeOfBuilding"
                  value={formData.typeOfBuilding}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                >
                  <option>High Rise</option>
                  <option>Low Rise</option>
                  <option>Mid Rise</option>
                  <option>Skyscraper</option>
                </select>
              </div>
            </div>
          </div>

          {/* Building Details */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Building Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Buildings
                </label>
                <input
                  type="number"
                  name="numberOfBuildings"
                  value={formData.numberOfBuildings}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Phases
                </label>
                <input
                  type="number"
                  name="numberOfPhases"
                  value={formData.numberOfPhases}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Flats per Floor
                </label>
                <input
                  type="number"
                  name="flatsPerFloor"
                  value={formData.flatsPerFloor}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Number of Floors
                </label>
                <input
                  type="number"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Floor Space Index (FSI)
                </label>
                <input
                  type="number"
                  name="fsi"
                  value={formData.fsi}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Super Built-up Area
                </label>
                <input
                  type="number"
                  name="superBuiltUpArea"
                  value={formData.superBuiltUpArea}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit Types
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Studio",
                  "1 BHK",
                  "1.5 BHK",
                  "2 BHK",
                  "2.5 BHK",
                  "3 BHK",
                  "4 BHK",
                  "Row House",
                  "Villa",
                ].map((unitType) => (
                  <label key={unitType} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="unitTypes"
                      value={unitType}
                      checked={formData.unitTypes.includes(unitType)}
                      onChange={handleChange}
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                    <span className="ml-2">{unitType}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Payment Schedule
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">
                  Customizable Payment Schedule
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="Stage Name"
                      className="flex-1 border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    />
                    <input
                      type="number"
                      placeholder="Percentage (%)"
                      className="w-32 border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    />
                    <button
                      type="button"
                      className="text-custom hover:text-custom/80"
                    >
                      + Add Stage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Swimming Pool",
                "Gym",
                "Lounge",
                "Parking",
                "Garden",
                "Club House",
                "Kids Play Area",
                "Security",
                "Power Backup",
                "Sports Court",
              ].map((amenity) => (
                <label key={amenity} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-custom focus:ring-custom"
                  />
                  <span className="ml-2">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Financial Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current ASR Rate
                </label>
                <input
                  type="number"
                  name="currentASRRate"
                  value={formData.currentASRRate}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Parking Charges
                </label>
                <input
                  type="number"
                  name="parkingCharges"
                  value={formData.parkingCharges}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Society Formation Fees
                </label>
                <input
                  type="number"
                  name="societyFormationFees"
                  value={formData.societyFormationFees}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Development Charges
                </label>
                <input
                  type="number"
                  name="developmentCharges"
                  value={formData.developmentCharges}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Legal Charges
                </label>
                <input
                  type="number"
                  name="legalCharges"
                  value={formData.legalCharges}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maintenance (per sq ft)
                </label>
                <input
                  type="number"
                  name="maintenance"
                  value={formData.maintenance}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Stamp Duty
                </label>
                <input
                  type="number"
                  name="stampDuty"
                  value={formData.stampDuty}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Registration Charges
                </label>
                <input
                  type="number"
                  name="registrationCharges"
                  value={formData.registrationCharges}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  GST Rate (%)
                </label>
                <input
                  type="number"
                  name="gstRate"
                  value={formData.gstRate}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Infrastructure Charges
                </label>
                <input
                  type="number"
                  name="infrastructureCharges"
                  value={formData.infrastructureCharges}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  RERA Number (Building Wise)
                </label>
                <input
                  type="text"
                  name="reraNumber"
                  value={formData.reraNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bank Account Details (Building Wise)
                </label>
                <textarea
                  name="bankAccountDetails"
                  value={formData.bankAccountDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  rows="3"
                  required
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Document Upload
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "IOD Document",
                "CC Document",
                "NA Document",
                "Purchase Deed",
                "RERA Certificate",
                "Approved Plans",
                "Title Documents",
                "Fire NOC",
                "Tree NOC",
                "PWD Approval",
                "Environment Clearance",
                "Airport Authority Approval",
                "Traffic NOC",
                "Project Brochure",
                "Building Stage Documents",
                "Updated ASR Rate Document",
              ].map((document) => (
                <div key={document}>
                  <label className="block text-sm font-medium text-gray-700">
                    {document}
                  </label>
                  <input
                    type="file"
                    name="documents"
                    onChange={handleFileChange}
                    className="mt-1 block w-full !rounded-button"
                    accept=".pdf,.doc,.docx"
                    multiple
                  />
                </div>
              ))}
             </div>
            </div> 

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-400" : "bg-custom hover:bg-custom/90"
              } text-white px-6 py-2 !rounded-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom`}
            >
              {isSubmitting ? "Saving..." : "Save Project Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyManagementSystem;