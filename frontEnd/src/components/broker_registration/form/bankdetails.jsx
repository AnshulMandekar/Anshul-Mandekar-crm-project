import React from 'react';
import FormSection from './formsection';
import FormInput from './forminput';

function BankDetails({ formData, handleInputChange }) {
  return (
    <FormSection title="Bank Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Account Number"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="IFSC Code"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Bank Name"
          name="bankName"
          value={formData.bankName}
          onChange={handleInputChange}
          required
        />
      </div>
    </FormSection>
  );
}

export default BankDetails;