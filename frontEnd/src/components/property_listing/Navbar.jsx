import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-lg fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="h-10 w-auto"
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
          />
          <span className="text-xl font-bold text-gray-800">RealEstate</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/newproject")}
            className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Add Property
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            List Property
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
