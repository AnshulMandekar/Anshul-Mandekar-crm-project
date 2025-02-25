import React from 'react';

function Documents() {
  const documents = [
    'IOD', 'CC', 'NA', 'Purchase Deed', 'Title Document', 'RERA Certificate',
    'Approved Plan', 'NOC Fire', 'Tree NOC', 'PWD NOC', 'Environment NOC',
    'Airport Authority NOC', 'Traffic NOC'
  ];

  return (
    <div className="sm:col-span-6">
      <label className="block text-sm font-medium text-gray-700">Documents & Approvals</label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {documents.map((doc) => (
          <label key={doc} className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-custom">
            <input type="checkbox" className="absolute h-4 w-4 top-2 right-2" />
            <span className="text-sm">{doc}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Documents;