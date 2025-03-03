import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    typeOfUnits: '',
    typeOfProject: '',
    source: '',
    typeOfLead: '',
    interestedProperty: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', isError: false });
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage({ text: 'Registration successful!', isError: false });
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        typeOfUnits: '',
        typeOfProject: '',
        source: '',
        typeOfLead: '',
        interestedProperty: ''
      });
    } catch (error) {
      setMessage({ text: 'Registration failed. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center">
            <UserCircle className="h-12 w-12 text-gray-700" />
          </div>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> User Lead Registration</h2>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
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
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>{isSubmitting ? 'Registering...' : 'Register'}</span>
                {isSubmitting && (
                  <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
              
              {message.text && (
                <div className={`text-sm ${message.isError ? 'text-red-600' : 'text-green-600'}`}>
                  {message.text}
                </div>
              )}
            </div>

            <div className="text-center text-sm text-gray-600">
              By registering, you agree to our 
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Privacy Policy </a>
              and
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Terms of Service</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;