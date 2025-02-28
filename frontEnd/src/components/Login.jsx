import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginin_form/LoginForm";

const Login = () => {
  const [isOtpSectionVisible, setIsOtpSectionVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerActive, setTimerActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGenerateOtp = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    } else if (!validateEmail(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/generate-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsOtpSectionVisible(true);
        setOtp("");
        startTimer();
      } else if (response.status === 401) {
        alert("Incorrect password. Please try again.");
      } else {
        alert(data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const startTimer = () => {
    setTimeLeft(300);
    setTimerActive(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = async () => {
    try {
      const otpResponse = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (otpResponse.ok) {
        alert("Login successful!");
        navigate("/AdminDashBoard"); // Redirect to dashboard or home page
      } else {
        alert("Invalid OTP.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <LoginForm
        handleGenerateOtp={handleGenerateOtp}
        isOtpSectionVisible={isOtpSectionVisible}
        timeLeft={timeLeft}
        timerActive={timerActive}
        otp={otp}
        setOtp={setOtp}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
