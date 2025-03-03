import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import PersonalInfoSection from './PersonalInfoSection';
import PropertyPreferencesSection from './PropertyPreferencesSection';
import LeadInformationSection from './LeadInformationSection';

function RegistrationForm() {
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
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">User Registration</h2>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <PersonalInfoSection formData={formData} handleChange={handleChange} />
              <PropertyPreferencesSection formData={formData} handleChange={handleChange} />
              <LeadInformationSection formData={formData} handleChange={handleChange} />
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

export default RegistrationForm;