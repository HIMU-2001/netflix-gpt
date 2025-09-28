import React from "react";

const ErrorMessage = ({
  message = "Something went wrong. Please try again.",
}) => {
  return (
    <div className="mt-4 w-full max-w-3xl mx-auto px-4">
      <div className="flex items-center gap-2 rounded-md bg-red-600/10 border border-red-500 px-4 py-3 text-red-500">
        {/* Error Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>

        {/* Error Text */}
        <p className="text-sm sm:text-base">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
