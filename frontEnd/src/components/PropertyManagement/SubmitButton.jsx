import React from "react";

const SubmitButton = ({ isSubmitting }) => {
  return (
    <div className="w-full flex justify-end mt-4">
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`flex items-center justify-center gap-2 px-6 py-2 text-white font-medium rounded-lg transition-all
          ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Saving...
          </>
        ) : (
          "Save Project Details"
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
