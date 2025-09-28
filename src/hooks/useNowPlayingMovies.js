import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { NOW_PLAYING_MOVIE_URL, options } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_URL, options);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
