import React from "react";
import { Key } from "lucide-react";

const OtpSection = ({ 
  isOtpSectionVisible, 
  handleGenerateOtp, 
  timeLeft, 
  timerActive, 
  otp, 
  setOtp 
}) => {
  if (!isOtpSectionVisible) return null;

  return (
    <div>
      <label htmlFor="otp" className="block text-lg font-medium text-gray-700">
        Enter OTP
      </label>
      
      <div className="mt-1 relative">
        <Key className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
        <input
          id="otp"
          type="text"
          maxLength={6}
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))} // Allow only digits
          className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 text-lg"
          placeholder="Enter 6-digit OTP"
          autoComplete="one-time-code"
          aria-label="Enter the 6-digit OTP received"
        />
      </div>

      <div className="mt-2 flex justify-between">
        <button
          type="button"
          onClick={handleGenerateOtp}
          disabled={timerActive}
          className={`text-lg ${timerActive ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:text-blue-700"}`}
        >
          Resend OTP
        </button>
        
        {timerActive && <span className="text-lg text-gray-500">{timeLeft}s</span>}
      </div>
    </div>
  );
};

export default OtpSection;
