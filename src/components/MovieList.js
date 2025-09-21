import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 ">
      <h2 className="text-lg md:text-2xl font-bold mb-3 text-white">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
