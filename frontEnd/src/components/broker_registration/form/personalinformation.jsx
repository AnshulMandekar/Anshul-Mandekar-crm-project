import React from 'react';
import FormSection from './formsection';
import FormInput from './forminput';

function PersonalInformation({ formData, handleInputChange }) {
  return (
    <FormSection title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
    </FormSection>
  );
}

export default PersonalInformation;