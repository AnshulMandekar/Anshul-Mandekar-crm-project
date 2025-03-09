import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({
  handleGenerateOtp,
  isOtpSectionVisible,
  timeLeft,
  timerActive,
  otp,
  setOtp,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md w-full space-y-6 bg-white p-10 rounded-2xl shadow-2xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome</h2>
        <p className="mt-2 text-gray-600">Login to your CRM account</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Username/Email Field */}
        <div>
          <label htmlFor="username" className="block font-medium text-gray-700">
            Username or Email
          </label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 text-gray-900"
              placeholder="Enter your email or username"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-blue-500 text-gray-900"
              placeholder="Enter your password"
            />
            {showPassword ? (
              <EyeOff
                className="absolute right-3 top-3 h-5 w-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                className="absolute right-3 top-3 h-5 w-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        {/* Generate OTP Button */}
        <button
          type="button"
          onClick={handleGenerateOtp}
          className="w-full py-2 border border-blue-500 text-blue-500 rounded-lg bg-white hover:bg-blue-50 transition font-medium"
        >
          Generate OTP
        </button>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
            Forgot password?
          </Link>
        </div>

        {/* OTP Section */}
        {isOtpSectionVisible && (
          <div className="mt-4">
            <label htmlFor="otp" className="block font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              className="w-full p-2 border rounded-lg focus:ring-blue-500 text-gray-900"
              placeholder="Enter OTP"
              autoFocus
            />
            <p className="text-sm text-gray-500 mt-2">
              Time left: {timeLeft}s {timerActive ? "(OTP is active)" : "(OTP expired)"}
            </p>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium mt-4"
            >
              Login
            </button>
          </div>
        )}

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?
            <span
              onClick={() => navigate("/select-user")}
              className="text-blue-500 hover:text-blue-700 font-medium ml-1 cursor-pointer"
            >
              Create a new account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
