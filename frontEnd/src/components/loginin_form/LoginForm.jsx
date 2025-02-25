import React from "react";
import { User, Lock } from "lucide-react";
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
  const navigate = useNavigate(); // Added useNavigate for navigation

  return (
    <div className="max-w-lg w-full space-y-6 bg-gray-50 p-12 rounded-xl shadow-xl text-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome</h2>
        <p className="mt-2 text-lg text-gray-600">
          Please Login to your CRM account
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username" className="block text-lg font-medium text-gray-700">
            Username or Email
          </label>
          <div className="mt-1 relative">
            <User className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
            <input
              id="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 text-lg"
              placeholder="Enter your username or email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 text-lg"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleGenerateOtp}
          className="w-full py-3 border border-blue-500 text-blue-500 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 text-lg font-medium"
        >
          Generate OTP
        </button>

        <div className="flex justify-end mt-1">
          <a href="#" className="text-lg text-blue-500 hover:text-blue-700">
            Forgot password?
          </a>
        </div>

        {isOtpSectionVisible && (
          <div className="mt-4">
            <label htmlFor="otp" className="block text-lg font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 text-lg"
              placeholder="Enter OTP"
            />
            <p className="text-sm text-gray-500 mt-2">
              Time left: {timeLeft}s {timerActive ? "(OTP is active)" : "(OTP expired)"}
            </p>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 text-lg font-medium mt-4"
            >
              Login
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
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
