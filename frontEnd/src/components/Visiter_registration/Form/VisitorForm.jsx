import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import RadioGroup from './RadioGroup';
import OTPSection from './OTPSection';

export default function VisitorForm() {
  const [formData, setFormData] = useState({
    houseNumber: '',
    streetName: '',
    pinCode: '',
    city: '',
    state: '',
    country: '',
    firstName: '',
    lastName: '',
    panNumber: '',
    aadharNumber: '',
    email: '',
    mobileNumber: '',
    lookingFor: '',
    fundingType: '',
    source: '',
    otpMobile: '',
    otp: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleGenerateOTP = () => {
    // Handle OTP generation
    console.log('Generating OTP for:', formData.otpMobile);
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
      <div className="form-section">
        <FormInput
          label="House Number"
          required
          name="houseNumber"
          value={formData.houseNumber}
          onChange={handleInputChange}
        />
        <FormInput
          label="Street Name"
          required
          name="streetName"
          value={formData.streetName}
          onChange={handleInputChange}
        />
        
        <div className="form-grid">
          <FormInput
            label="PIN Code"
            required
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
          />
          <FormInput
            label="City/Town"
            required
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-grid">
          <FormInput
            label="State/Province"
            required
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          <FormInput
            label="Country"
            required
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-grid">
          <FormInput
            label="First Name"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormInput
            label="Last Name"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-grid">
          <FormInput
            label="PAN Number"
            required
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleInputChange}
          />
          <FormInput
            label="Aadhar Number"
            required
            pattern="[0-9]{12}"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-grid">
          <FormInput
            label="Email Address"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormInput
            label="Mobile/WhatsApp Number"
            type="tel"
            required
            pattern="[0-9]{10}"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        <FormSelect
          label="Looking For"
          required
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleInputChange}
          options={[
            { value: 'residential', label: 'Residential Property' },
            { value: 'commercial', label: 'Commercial Property' },
            { value: 'land', label: 'Land/Plot' },
          ]}
        />

        <RadioGroup
          label="Funding Type"
          name="fundingType"
          value={formData.fundingType}
          onChange={handleInputChange}
          options={[
            { value: 'loan', label: 'Loan' },
            { value: 'self', label: 'Self Funding' },
          ]}
        />

        <RadioGroup
          label="How did you hear about us?"
          name="source"
          value={formData.source}
          onChange={handleInputChange}
          options={[
            { value: 'social', label: 'Social Media' },
            { value: 'broker', label: 'Broker' },
            { value: 'reference', label: 'Reference' },
          ]}
        />

        <OTPSection
          mobileNumber={formData.otpMobile}
          otp={formData.otp}
          onMobileNumberChange={(e) => setFormData((prev) => ({ ...prev, otpMobile: e.target.value }))}
          onOTPChange={(e) => setFormData((prev) => ({ ...prev, otp: e.target.value }))}
          onGenerateOTP={handleGenerateOTP}
        />
      </div>

      <div className="pt-6">
        <p className="text-sm text-gray-500 mb-6">
          By submitting this form, you confirm that all information provided is accurate and true.
        </p>
        <button
          type="submit"
          className="form-button"
        >
          Register
        </button>
      </div>
    </form>
  );
}