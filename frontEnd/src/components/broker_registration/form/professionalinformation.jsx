import React from 'react';
import FormSection from './formsection';
import FormInput from './forminput';

function ProfessionalInformation({ formData, handleInputChange }) {
  return (
    <FormSection title="Professional Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="RERA Number"
          name="reraNumber"
          value={formData.reraNumber}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="PAN Number"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Rate of Brokerage (%)"
          name="brokerageRate"
          type="number"
          step="0.01"
          value={formData.brokerageRate}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Incentive"
          name="incentive"
          value={formData.incentive}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Type</label>
        <div className="space-x-4">
          {['individual', 'pvt_ltd', 'partnership'].map((type) => (
            <label key={type} className="inline-flex items-center">
              <input
                type="radio"
                name="companyType"
                value={type}
                checked={formData.companyType === type}
                onChange={handleInputChange}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 capitalize">{type.replace('_', ' ')}</span>
            </label>
          ))}
        </div>
      </div>
    </FormSection>
  );
}

export default ProfessionalInformation;