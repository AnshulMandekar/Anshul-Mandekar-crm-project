import React from 'react';

export default function OTPSection({
  mobileNumber,
  otp,
  onMobileNumberChange,
  onOTPChange,
  onGenerateOTP,
}) {
  return (
    <div className="form-grid">
      <div>
        <label className="form-label">
          Enter Mobile Number for OTP
        </label>
        <div className="flex mt-1">
          <input
            type="tel"
            pattern="[0-9]{10}"
            required
            value={mobileNumber}
            onChange={onMobileNumberChange}
            className="form-input flex-grow rounded-r-none"
          />
          <button
            type="button"
            onClick={onGenerateOTP}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Generate OTP
          </button>
        </div>
      </div>
      <div>
        <label className="form-label">Enter OTP</label>
        <input
          type="text"
          pattern="[0-9]{6}"
          maxLength={6}
          required
          value={otp}
          onChange={onOTPChange}
          className="form-input"
        />
      </div>
    </div>
  );
}