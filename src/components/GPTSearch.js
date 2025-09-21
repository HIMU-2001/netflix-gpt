import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center px-4 py-8"
      style={{
        backgroundImage: BG_IMG,
      }}
    >
      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-6">
        <GPTSearchBar />
      </div>

      {/* Movie Suggestions */}
      <div className="w-full max-w-5xl">
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
