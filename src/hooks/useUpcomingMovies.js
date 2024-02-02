import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcoming } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      //Fetching Data from External API to get movie data and storing it in firebase

      // const data = await fetch(
      //   "https://api.themoviedb.org/3/movie/upcoming?page=1",
      //   options
      // );
      // const upcomingMovies = await data.json();
      // fetch(
      //   "https://netflix-project-708e8-default-rtdb.firebaseio.com/upcomingmovies.json",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(upcomingMovies.results),
      //   }
      // );
      const movieData = await fetch(
        "https://netflix-project-708e8-default-rtdb.firebaseio.com/upcomingmovies.json"
      );
      const movies = await movieData.json();

      dispatch(addUpcoming(movies));
    };
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
