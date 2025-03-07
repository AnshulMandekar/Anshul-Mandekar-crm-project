import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-custom">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-custom">
              Projects
            </a>
            <a href="#" className="text-gray-700 hover:text-custom">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-custom focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
            <a href="#" className="text-gray-700 hover:text-custom">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-custom">
              Projects
            </a>
            <a href="#" className="text-gray-700 hover:text-custom">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
