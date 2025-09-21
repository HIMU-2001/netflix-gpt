import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import {
  options,
  TOP_RATED_MOVIE_URL,
  UPCOMING_MOVIE_URL,
} from "../utils/constants";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE_URL, options);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
