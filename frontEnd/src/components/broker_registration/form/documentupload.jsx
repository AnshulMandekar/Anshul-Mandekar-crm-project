import React from 'react';
import { Upload, FileText, CreditCard } from 'lucide-react';
import FormSection from "./formsection";

function DocumentUpload() {
  const documents = [
    { label: 'Profile Photo', icon: <Upload className="h-6 w-6" /> },
    { label: 'RERA Certificate', icon: <FileText className="h-6 w-6" /> },
    { label: 'Visiting Card', icon: <CreditCard className="h-6 w-6" /> },
    { label: 'GST Certificate', icon: <FileText className="h-6 w-6" /> },
  ];

  return (
    <FormSection title="Document Upload">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((item) => (
          <div key={item.label}>
            <label className="block text-sm font-medium text-gray-700">{item.label}</label>
            <div className="mt-1 flex items-center">
              <div className="w-full h-32 rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center hover:border-blue-500 cursor-pointer transition-colors">
                <div className="text-center">
                  {item.icon}
                  <div className="text-sm text-gray-600 mt-2">Upload {item.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}

export default DocumentUpload;
