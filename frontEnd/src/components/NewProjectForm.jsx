import React from 'react';
import Navbar from './new_project_form/Navbar';
import ProjectForm from './new_project_form/ProjectForm';

function NewProjectForm() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <ProjectForm />
      </main>
    </div>
  );
}

export default NewProjectForm;