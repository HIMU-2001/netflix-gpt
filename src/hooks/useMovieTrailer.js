import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const mainVideo = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const jsonData = await mainVideo.json();
    // console.log(jsonData);
    const filteredData = jsonData.results.filter(
      (clip) => clip.type === "Trailer"
    );
    // console.log(filteredData);
    const trailer = filteredData.length
      ? filteredData?.[0]
      : jsonData?.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
