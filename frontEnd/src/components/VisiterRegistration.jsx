import React from 'react';
import Navbar from './Visiter_registration/Layout/Navbar';
import Footer from './Visiter_registration/Layout/Footer';
import VisitorForm from './Visiter_registration/Form/VisitorForm';
import './VisiterRegistration.css'

function VisiterRegistration() {
  return (
    <div className="form-container">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="form-card">
            <div className="px-8 py-6 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-900">
                Visitor Registration Form
              </h1>
            </div>
            <VisitorForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default VisiterRegistration;