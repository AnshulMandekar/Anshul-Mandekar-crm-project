import React, { useState } from 'react';

const DocumentUpload = ({ handleFileChange }) => {
  const documents = [
    "IOD Document",
    "CC Document",
    "NA Document",
    "Purchase Deed",
    "RERA Certificate",
    "Approved Plans",
    "Title Documents",
    "Fire NOC",
    "Tree NOC",
    "PWD Approval",
    "Environment Clearance",
    "Airport Authority Approval",
    "Traffic NOC",
    "Project Brochure",
    "Building Stage Documents",
    "Updated ASR Rate Document",
  ];

  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileSelect = (event, documentName) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prev) => ({
      ...prev,
      [documentName]: files,
    }));

    handleFileChange(event);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Document Upload
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((document) => (
          <div key={document} className="p-4 border rounded-lg shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {document}
            </label>
            <input
              type="file"
              name={document}
              onChange={(e) => handleFileSelect(e, document)}
              className="hidden"
              id={document}
              accept=".pdf,.doc,.docx"
              multiple
            />
            <label
              htmlFor={document}
              className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
            >
              Upload File(s)
            </label>
            {selectedFiles[document] && selectedFiles[document].length > 0 && (
              <ul className="mt-2 text-xs text-gray-700">
                {selectedFiles[document].map((file, index) => (
                  <li key={index} className="truncate">
                    📄 {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
