import React from "react";
import { MOVIE_IMG_URL, placeholder_img } from "../utils/constants";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 flex-shrink-0">
      <Link to={"/browse/" + movie.id}>
        <div className="aspect-[2/3]">
          <img
            className="w-full h-full object-cover rounded-md shadow-md hover:shadow-lg"
            src={MOVIE_IMG_URL + movie.poster_path}
            alt={movie.title || "movie poster"}
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
