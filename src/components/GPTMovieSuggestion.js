import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="space-y-12 py-6">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={index}
          title={movieName}
          movies={movieResults[index]}
          spaced // custom prop for spacing tweaks
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
