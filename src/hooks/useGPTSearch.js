import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { genAI } from "../utils/gemini";
import { addGPTMovieResult } from "../utils/gptSlice";
import { useState } from "react";

export const useGPTSearch = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async (searchText) => {
    try {
      if (!searchText.trim()) {
        setErrorMsg(true);
        return;
      }
      setErrorMsg(false); // reset error
      const gptQuery =
        "You are a movie recommendation system. " +
        `Given the user query: "${searchText}", ` +
        "suggest exactly 5 relevant movie names. " +
        "Output only the 5 movie titles, separated by commas. " +
        "Do not include numbering or any extra text. " +
        "Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(gptQuery);

      const responseText = result.response.text(); // ✅ call as function
      console.log("Gemini Output:", responseText);

      const gptMovies = responseText
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArray);
      console.log(TMDBResults);
      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: TMDBResults })
      );
    } catch (err) {
      console.error("Gemini error:", err);
      setErrorMsg(true);
    }
  };

  return { handleGptSearchClick, errorMsg };
};
