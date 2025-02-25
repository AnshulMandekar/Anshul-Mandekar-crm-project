import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-8 w-auto mb-4" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
            <p className="text-gray-500 text-sm">Your trusted partner in real estate, helping you find your perfect home.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Properties</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Agents</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-500">123 Real Estate Ave</li>
              <li className="text-gray-500">New York, NY 10001</li>
              <li className="text-gray-500">+1 (555) 123-4567</li>
              <li className="text-gray-500">info@realestate.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2024 Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;