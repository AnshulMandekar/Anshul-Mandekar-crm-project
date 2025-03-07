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
      <div className="max-w-7xl mx-auto px-6 py-10">
        {submitMessage.text && (
          <div className={`mb-4 p-4 rounded-lg text-lg font-semibold ${submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {submitMessage.text}
          </div>
        )}
        <form className="space-y-10 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* Project Basic Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Project Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
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
                <label className="block text-sm font-semibold text-gray-700">Area of Land (sq ft)</label>
                <input
                  type="number"
                  name="areaOfLand"
                  value={formData.areaOfLand}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700">Project Address</label>
                <textarea
                  rows="3"
                  name="projectAddress"
                  value={formData.projectAddress}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Project Start Date</label>
                <input
                  type="date"
                  name="projectStartDate"
                  value={formData.projectStartDate}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Expected Completion Date</label>
                <input
                  type="date"
                  name="expectedCompletionDate"
                  value={formData.expectedCompletionDate}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Geo Tag of Land</label>
                <input
                  type="text"
                  name="geoTag"
                  value={formData.geoTag}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
                  placeholder="Latitude, Longitude"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Type of Building</label>
                <select
                  name="typeOfBuilding"
                  value={formData.typeOfBuilding}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm"
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
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Building Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Number of Buildings", name: "numberOfBuildings" },
                { label: "Number of Phases", name: "numberOfPhases" },
                { label: "Flats per Floor", name: "flatsPerFloor" },
                { label: "Total Number of Floors", name: "totalFloors" },
                { label: "Floor Space Index (FSI)", name: "fsi" },
                { label: "Super Built-up Area", name: "superBuiltUpArea" },
              ].map((item) => (
                <div key={item.name}>
                <label className="block text-sm font-medium text-gray-800">
                    {item.label}
                  </label>
                  <input
                    type="number"
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    className="mt-2 w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-custom focus:border-custom rounded-lg p-2"
                    required
                  />
                </div>
              ))}
            </div>
            {/* Unit Types */}
            <div className="mt-8">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
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
                  <label
                    key={unitType}
                    className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200"
                  >
                    <input
                      type="checkbox"
                      name="unitTypes"
                      value={unitType}
                      checked={formData.unitTypes.includes(unitType)}
                      onChange={handleChange}
                      className="rounded border-gray-400 text-custom focus:ring-custom"
                    />
                    <span className="ml-2 text-gray-900">{unitType}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Schedule</h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="border border-gray-300 p-5 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Customizable Payment Schedule
                </h3>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <input
                      type="text"
                      placeholder="Stage Name"
                      className="flex-1 border border-gray-300 shadow-sm p-2 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    />
                    <input
                      type="number"
                      placeholder="Percentage (%)"
                      className="w-32 border border-gray-300 shadow-sm p-2 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    />
                    <button
                      type="button"
                      className="bg-custom text-white px-4 py-2 rounded-lg shadow-md hover:bg-custom/90 transition-all"
                    >
                      + Add Stage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
            
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
                <label
                  key={amenity}
                  className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={handleChange}
                    className="w-5 h-5 text-custom border-gray-300 focus:ring-custom rounded"
                  />
                  <span className="text-gray-800 font-medium">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Current ASR Rate", name: "currentASRRate", type: "number" },
                { label: "Parking Charges", name: "parkingCharges", type: "number" },
                { label: "Society Formation Fees", name: "societyFormationFees", type: "number" },
                { label: "Development Charges", name: "developmentCharges", type: "number" },
                { label: "Legal Charges", name: "legalCharges", type: "number" },
                { label: "Maintenance (per sq ft)", name: "maintenance", type: "number" },
                { label: "Stamp Duty", name: "stampDuty", type: "number" },
                { label: "Registration Charges", name: "registrationCharges", type: "number" },
                { label: "GST Rate (%)", name: "gstRate", type: "number" },
                { label: "Infrastructure Charges", name: "infrastructureCharges", type: "number" },
                { label: "RERA Number (Building Wise)", name: "reraNumber", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm transition-all"
                    required
                  />
                </div>
              ))}
              
              {/* Bank Account Details */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Bank Account Details (Building Wise)
                </label>
                <textarea
                  name="bankAccountDetails"
                  value={formData.bankAccountDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 shadow-sm transition-all"
                  rows="3"
                  required
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Upload</h2>

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
                <div key={document} className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {document}
                  </label>
                  <input
                    type="file"
                    name="documents"
                    onChange={handleFileChange}
                    className="file:border file:border-gray-300 file:rounded-md file:px-3 file:py-2 file:text-sm file:bg-gray-50 file:hover:bg-gray-100 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    accept=".pdf,.doc,.docx"
                    multiple
                  />
                </div>
              ))}
            </div>
          </div>
 

          {/* Submit Button */}
          <div className="w-full flex justify-end mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-lg bg-blue-500 text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed opacity-70"
                  : "bg-custom hover:bg-custom/90 focus:ring-custom"
              }`}
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