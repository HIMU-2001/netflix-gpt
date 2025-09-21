import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.popularMovies
  )
    return;

  //   console.log(movies.popularMovies);
  //   console.log(movies.nowPlayingMovies);

  return (
    <div className="bg-black text-white">
      {/* Container to pull the first row over the video */}
      <div className="-mt-28 relative z-10 space-y-8 ">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>

      {/* Remaining rows */}
      <div className="space-y-8 py-8">
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Releases" movies={movies.upcomingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
