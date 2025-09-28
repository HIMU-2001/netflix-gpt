import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative pt-[80px]" // <-- add top padding for fixed header
      style={{ backgroundImage: BG_IMG }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col space-y-6 px-4 sm:px-6 md:px-8 py-8">
        {/* Page Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
          {lang[language].heading}
        </h1>

        {/* Search Bar */}
        <div className="w-full mt-2">
          <GPTSearchBar />
        </div>

        {/* Movie Suggestions */}
      </div>
    </div>
  );
};

export default GPTSearch;
