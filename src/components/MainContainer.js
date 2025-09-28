import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const { id, original_title, overview } = movies[2];

  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] lg:h-[100vh] overflow-hidden">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

      {/* Title Overlay */}
      <div className="absolute top-1/3 left-6 md:left-12 z-10 max-w-3xl">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
