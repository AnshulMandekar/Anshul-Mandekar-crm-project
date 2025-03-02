// import React from 'react';

// const documentFields = [
//   { name: 'approval', label: 'Approval Document', required: true },
//   { name: 'IOD', label: 'IOD Document', required: true },
//   { name: 'CC', label: 'CC Document', required: true },
//   { name: 'NA', label: 'NA Document', required: false },
//   { name: 'purchaseDeed', label: 'Purchase Deed', required: true },
//   { name: 'titleDocument', label: 'Title Document', required: true },
//   { name: 'reraCertificate', label: 'RERA Certificate', required: true },
//   { name: 'approvedPlan', label: 'Approved Plan', required: true },
//   { name: 'NOCFire', label: 'NOC Fire', required: true },
//   { name: 'tree', label: 'Tree NOC', required: true },
//   { name: 'PWD', label: 'PWD NOC', required: true },
//   { name: 'environment', label: 'Environment NOC', required: true },
//   { name: 'airportAuthority', label: 'Airport Authority NOC', required: true },
//   { name: 'traffic', label: 'Traffic NOC', required: true },
//   { name: 'projectBrochure', label: 'Project Brochure', required: false },
// ];

// function Documents({ onDocumentsChange }) {
//   const handleFileChange = (name, file) => {
//     if (file) {
//       if (file.size > 1024 * 1024) { // 1MB check
//         alert(`File ${file.name} exceeds 1MB limit`);
//         return;
//       }
//       onDocumentsChange(name, file);
//     }
//   };

//   return (
//     <div className="mb-6">
//       <h3 className="text-lg font-medium mb-4">Documents & Certificates</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {documentFields.map(({ name, label, required }) => (
//           <div key={name} className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">
//               {label}
//               {required && <span className="text-red-500 ml-1">*</span>}
//             </label>
//             <input
//               type="file"
//               onChange={(e) => handleFileChange(name, e.target.files[0])}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//               required={required}
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               {required ? 'Required' : 'Optional'} • Max 1MB
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Documents;

import React, { useState } from "react";
import axios from "axios";

const documentFields = [
  { name: "approval", label: "Approval Document", required: true },
  { name: "IOD", label: "IOD Document", required: true },
  { name: "CC", label: "CC Document", required: true },
  { name: "NA", label: "NA Document", required: false },
  { name: "purchaseDeed", label: "Purchase Deed", required: true },
  { name: "titleDocument", label: "Title Document", required: true },
  { name: "reraCertificate", label: "RERA Certificate", required: true },
  { name: "approvedPlan", label: "Approved Plan", required: true },
  { name: "NOCFire", label: "NOC Fire", required: true },
  { name: "tree", label: "Tree NOC", required: true },
  { name: "PWD", label: "PWD NOC", required: true },
  { name: "environment", label: "Environment NOC", required: true },
  { name: "airportAuthority", label: "Airport Authority NOC", required: true },
  { name: "traffic", label: "Traffic NOC", required: true },
  { name: "projectBrochure", label: "Project Brochure", required: false },
];

const Documents = () => {
  const [files, setFiles] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState({});

  const handleFileChange = (name, file) => {
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB check
        alert(`File ${file.name} exceeds 1MB limit`);
        return;
      }
      setFiles((prev) => ({ ...prev, [name]: file }));
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const formData = new FormData();
      for (const name in files) {
        formData.append("file", files[name]);
        const response = await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setUploadedUrls((prev) => ({ ...prev, [name]: response.data.url }));
      }
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload failed!");
    }
    setUploading(false);
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
            {uploadedUrls[name] && (
              <p className="text-green-500 text-xs">
                Uploaded: <a href={uploadedUrls[name]} target="_blank" rel="noopener noreferrer" className="underline">
                  View File
                </a>
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {required ? "Required" : "Optional"} • Max 1MB
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Documents"}
      </button>
    </div>
  );
};

export default Documents;
