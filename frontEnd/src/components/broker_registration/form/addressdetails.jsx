import React from 'react';
import FormSection from './formsection';
import FormInput from './forminput';
import FormSelect from './formselect';

function AddressDetails({ formData, handleInputChange }) {
  return (
    <FormSection title="Address Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="House Number"
          name="houseNumber"
          value={formData.houseNumber}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Street Name"
          name="streetName"
          value={formData.streetName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Neighborhood"
          name="neighborhood"
          value={formData.neighborhood}
          onChange={handleInputChange}
        />
        <FormInput
          label="City/Town"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        <FormSelect
          label="State/Province"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
          options={[
            { value: '', label: 'Select State' },
            { value: 'CA', label: 'California' },
            { value: 'NY', label: 'New York' },
            { value: 'TX', label: 'Texas' },
          ]}
        />
        <FormInput
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
        />
        <FormSelect
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
          options={[
            { value: '', label: 'Select Country' },
            { value: 'US', label: 'United States' },
            { value: 'UK', label: 'United Kingdom' },
            { value: 'CA', label: 'Canada' },
          ]}
        />
      </div>
    </FormSection>
  );
}

export default AddressDetails;