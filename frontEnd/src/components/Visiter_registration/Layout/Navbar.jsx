import React from 'react';
import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}