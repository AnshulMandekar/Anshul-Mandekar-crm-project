import React from 'react';

const FinancialInformation = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Financial Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Current ASR Rate', name: 'currentASRRate' },
          { label: 'Parking Charges', name: 'parkingCharges' },
          { label: 'Society Formation Fees', name: 'societyFormationFees' },
          { label: 'Development Charges', name: 'developmentCharges' },
          { label: 'Legal Charges', name: 'legalCharges' },
          { label: 'Maintenance (per sq ft)', name: 'maintenance' },
          { label: 'Stamp Duty', name: 'stampDuty' },
          { label: 'Registration Charges', name: 'registrationCharges' },
          { label: 'Infrastructure Charges', name: 'infrastructureCharges' },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type="number"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              min="0"
              className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
              required
            />
          </div>
        ))}

        {/* GST Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            GST Rate (%)
          </label>
          <input
            type="number"
            name="gstRate"
            value={formData.gstRate || ''}
            onChange={handleChange}
            min="0"
            max="100"
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* RERA Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            RERA Number (Building Wise)
          </label>
          <input
            type="text"
            name="reraNumber"
            value={formData.reraNumber || ''}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>

        {/* Bank Account Details */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Bank Account Details (Building Wise)
          </label>
          <textarea
            name="bankAccountDetails"
            value={formData.bankAccountDetails || ''}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialInformation;
