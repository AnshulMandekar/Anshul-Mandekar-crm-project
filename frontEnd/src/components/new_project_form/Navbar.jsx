import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Project Management</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add New Project
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;