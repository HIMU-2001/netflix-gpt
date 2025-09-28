import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import ErrorMessage from "./ErrorMessage";
import { useGPTSearch } from "../hooks/useGPTSearch";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import MovieListShimmer from "./MovieListShimmer";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const { handleGptSearchClick, errorMsg } = useGPTSearch();
  const searchText = useRef("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!searchText.current.value.trim()) return;
    setLoading(true);
    try {
      await handleGptSearchClick(searchText.current.value);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 mt-4">
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Search Form */}
        <form
          className="flex w-full max-w-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[language].placeholder}
            className="
              flex-1 
              px-4 py-3
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
            disabled={loading}
          />
          <button
            type="submit"
            className={`
              bg-red-600 
              hover:bg-red-700 
              text-white 
              font-semibold 
              px-6 py-3 
              rounded-r-md 
              transition
              text-sm sm:text-base
              ${loading ? "opacity-60 cursor-not-allowed" : ""}
            `}
            disabled={loading}
          >
            {loading ? "Searching..." : lang[language].search}
          </button>
        </form>

        {/* Error Message */}
        {errorMsg && (
          <div className="w-full mt-4">
            <ErrorMessage message="Failed to fetch recommendations. Try again!" />
          </div>
        )}

        {/* Suggestions / Shimmer */}
        <div className="w-full mt-8 space-y-12">
          {loading ? <MovieListShimmer /> : <GPTMovieSuggestion />}
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
