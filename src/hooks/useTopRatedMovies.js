import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { options, TOP_RATED_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const { topRatedMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIE_URL, options);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
};
