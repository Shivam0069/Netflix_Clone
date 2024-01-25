import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      //Fetching Data from External API to get movie data and storing it in firebase 

      // const data = await fetch(
      //   "https://api.themoviedb.org/3/movie/popular?page=1",
      //   options
      // );
      // const popular = await data.json();

      // fetch(
      //   "https://netflix-project-708e8-default-rtdb.firebaseio.com/popular.json",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(popular.results),
      //   }
      // );

      const movieData = await fetch(
        "https://netflix-project-708e8-default-rtdb.firebaseio.com/popular.json"
      );
      const movies = await movieData.json();

      dispatch(addPopular(movies));
    };
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
