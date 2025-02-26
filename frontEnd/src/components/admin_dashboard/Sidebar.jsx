// import React from 'react';
// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate();

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-white border-r border-gray-200">
//       <div className="p-6">
//         <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/>
//       </div>
//       <nav className="mt-6">
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-custom bg-gray-50">
//           <i className="fas fa-home w-5 h-5 mr-3"></i>
//           Dashboard
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-building w-5 h-5 mr-3"></i>
//           Projects
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-envelope w-5 h-5 mr-3"></i>
//           Enquiries
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-users w-5 h-5 mr-3"></i>
//           Leads
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-briefcase w-5 h-5 mr-3"></i>
//           Vendors
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
//           Reports
//         </a>
//         <a href="#" className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
//           <i className="fas fa-calendar w-5 h-5 mr-3"></i>
//           Calendar
//         </a>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/>
      </div>
      <nav className="mt-6">
        <button onClick={() => navigate("/dashboard")} className="flex items-center px-6 py-3 text-sm font-medium text-custom bg-gray-50 w-full text-left">
          <i className="fas fa-home w-5 h-5 mr-3"></i>
          Dashboard
        </button>
        <button onClick={() => navigate("/propertylisting")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-building w-5 h-5 mr-3"></i>
          Projects
        </button>
        <button onClick={() => navigate("/enquiries")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-envelope w-5 h-5 mr-3"></i>
          Enquiries
        </button>
        <button onClick={() => navigate("/leads")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-users w-5 h-5 mr-3"></i>
          Leads
        </button>
        <button onClick={() => navigate("/vendors")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-briefcase w-5 h-5 mr-3"></i>
          Vendors
        </button>
        <button onClick={() => navigate("/reports")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
          Reports
        </button>
        <button onClick={() => navigate("/calendar")} className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left">
          <i className="fas fa-calendar w-5 h-5 mr-3"></i>
          Calendar
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
