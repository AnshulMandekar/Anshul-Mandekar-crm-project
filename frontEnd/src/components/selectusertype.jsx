import React from "react";
import { useNavigate } from "react-router-dom";

const SelectUserType = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Select Account Type</h2>
        <button
          className="w-full mb-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={() => navigate("/signup")}
        >
          Admin
        </button>
        <button
          className="w-full mb-3 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
          onClick={() => navigate("/VisiterRegistration")}
        >
          Client
        </button>
        <button
          className="w-full py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md"
          onClick={() => navigate("/BrokerRegistration")}
        >
          Broker
        </button>
      </div>
    </div>
  );
};

export default SelectUserType;
