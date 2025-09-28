import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { options, UPCOMING_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const { upcomingMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE_URL, options);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};
