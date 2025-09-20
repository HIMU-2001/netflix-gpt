import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const { id, original_title, overview } = movies?.[0];

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Title Overlay */}
      <div className="absolute bottom-20 left-6 md:left-12 z-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
