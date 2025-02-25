import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img
              className="h-10 w-auto mb-4"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
            />
            <p className="text-gray-400 text-sm">
              Your trusted partner in real estate, helping you find your dream home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Properties", "Agents", "Blog"].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="text-gray-400 hover:text-white cursor-pointer transition"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-400">123 Real Estate Ave, NY 10001</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">info@realestate.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <i className={`fab fa-${icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2024 RealEstate. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
