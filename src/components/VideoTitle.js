import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white space-y-4">
      {/* Movie Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl line-clamp-3 drop-shadow-md">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-white text-black font-bold px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white font-bold px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
