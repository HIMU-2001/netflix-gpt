import React from "react";
import { MOVIE_IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  //   console.log(movie.poster_path);

  return (
    <div className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-auto rounded-md shadow-md hover:shadow-lg"
        src={MOVIE_IMG_URL + movie.poster_path}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
