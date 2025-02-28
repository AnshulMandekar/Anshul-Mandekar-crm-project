import React from 'react';

const documentFields = [
  { name: 'approval', label: 'Approval Document', required: true },
  { name: 'IOD', label: 'IOD Document', required: true },
  { name: 'CC', label: 'CC Document', required: true },
  { name: 'NA', label: 'NA Document', required: false },
  { name: 'purchaseDeed', label: 'Purchase Deed', required: true },
  { name: 'titleDocument', label: 'Title Document', required: true },
  { name: 'reraCertificate', label: 'RERA Certificate', required: true },
  { name: 'approvedPlan', label: 'Approved Plan', required: true },
  { name: 'NOCFire', label: 'NOC Fire', required: true },
  { name: 'tree', label: 'Tree NOC', required: true },
  { name: 'PWD', label: 'PWD NOC', required: true },
  { name: 'environment', label: 'Environment NOC', required: true },
  { name: 'airportAuthority', label: 'Airport Authority NOC', required: true },
  { name: 'traffic', label: 'Traffic NOC', required: true },
  { name: 'projectBrochure', label: 'Project Brochure', required: false },
];

function Documents({ onDocumentsChange }) {
  const handleFileChange = (name, file) => {
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB check
        alert(`File ${file.name} exceeds 1MB limit`);
        return;
      }
      onDocumentsChange(name, file);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-4">Documents & Certificates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documentFields.map(({ name, label, required }) => (
          <div key={name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(name, e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required={required}
            />
            <p className="text-xs text-gray-500 mt-1">
              {required ? 'Required' : 'Optional'} • Max 1MB
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;