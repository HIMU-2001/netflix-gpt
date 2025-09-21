import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options, POPULAR_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE_URL, options);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
