import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">
              <i className="fas fa-plus mr-2"></i>Add New Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;