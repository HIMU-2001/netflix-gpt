import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants"; // assuming you have translations

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 mt-6">
      <form className="flex w-full max-w-3xl">
        {/* Input */}
        <input
          type="text"
          placeholder={lang[language].placeholder}
          className="
            flex-1 
            px-4 py-2 sm:py-3 
            rounded-l-md 
            bg-gray-800 
            text-white 
            placeholder-gray-400 
            focus:outline-none 
            focus:ring-2 
            focus:ring-red-600 
            focus:ring-opacity-50 
            transition
            text-sm sm:text-base
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            bg-red-600 
            hover:bg-red-700 
            text-white 
            font-semibold 
            px-4 sm:px-6 
            py-2 sm:py-3 
            rounded-r-md 
            transition
            text-sm sm:text-base
          "
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
