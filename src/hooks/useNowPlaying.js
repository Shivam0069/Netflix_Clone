import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      //Fetching Data from External API to get movie data and storing it in firebase 
      // const data = await fetch(
      //   "https://api.themoviedb.org/3/movie/now_playing?page=1",
      //   options
      // );
      // const nowplaying = await data.json();
      // fetch(
      //   "https://netflix-project-708e8-default-rtdb.firebaseio.com/nowplaying.json",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(nowplaying.results),
      //   }
      // );
      const movieData = await fetch(
        "https://netflix-project-708e8-default-rtdb.firebaseio.com/nowplaying.json"
      );
      const movies = await movieData.json();

      dispatch(addNowPlaying(movies));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
