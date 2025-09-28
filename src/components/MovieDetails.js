import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import { options } from "../utils/constants";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const gptToggle = useSelector((store) => store.gptSearch.showGPTSearch);

  const getMovieData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const movie = await data.json();
      setMovieData(movie);
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [movieData]);

  if (!movieData)
    return <div className="text-white text-center mt-20">Loading...</div>;

  const {
    backdrop_path,
    poster_path,
    title,
    tagline,
    overview,
    release_date,
    runtime,
    genres,
    vote_average,
    production_companies,
  } = movieData;

  return (
    <div className="w-full min-h-screen text-white relative pt-28">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative px-4 md:px-12 py-12 flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
        {/* Poster */}
        <img
          src={`${POSTER_BASE_URL}${poster_path}`}
          alt={title}
          className="w-40 md:w-60 rounded-md shadow-lg flex-shrink-0"
        />

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Title and tagline */}
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          {tagline && <p className="text-gray-300 italic">{tagline}</p>}

          {/* Overview */}
          <p className="text-gray-200 text-sm md:text-base">{overview}</p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-gray-300 text-sm md:text-base">
            <span>
              <strong>Release:</strong> {release_date}
            </span>
            <span>
              <strong>Runtime:</strong> {runtime} min
            </span>
            <span>
              <strong>Genres:</strong> {genres.map((g) => g.name).join(", ")}
            </span>
            <span>
              <strong>Rating:</strong> {vote_average.toFixed(1)}
            </span>
          </div>

          {/* Production Companies */}
          {production_companies && production_companies.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {production_companies.map(
                (company) =>
                  company.logo_path && (
                    <img
                      key={company.id}
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      className="h-10 object-contain"
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
