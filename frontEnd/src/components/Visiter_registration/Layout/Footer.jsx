import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}