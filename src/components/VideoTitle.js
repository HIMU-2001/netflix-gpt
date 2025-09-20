import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="max-w-2xl text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>

      {/* Overview */}
      <p className="text-sm md:text-lg mb-6 line-clamp-3">{overview}</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white font-semibold px-6 py-2 rounded hover:bg-gray-600 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
