import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[200px] flex-shrink-0">
      <div className="aspect-[2/3] bg-gray-700 rounded-md animate-pulse transition-transform transform hover:scale-105" />
    </div>
  );
};

const MovieListShimmer = ({ title = "Loading..." }) => {
  return (
    <div className="px-4 md:px-12">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieListShimmer;
