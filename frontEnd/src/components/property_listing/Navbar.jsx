import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/newproject")}
              className="rounded bg-green-500 text-white px-4 py-2 text-sm font-medium mr-4"
            >
              Add New Property
            </button>
            <button className="rounded bg-custom text-white px-4 py-2 text-sm font-medium">
              List Property
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded border border-gray-300 px-4 py-2 text-sm font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
