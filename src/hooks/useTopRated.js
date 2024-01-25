import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated =  () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      //Fetching Data from External API to get movie data and storing it in firebase 

      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const topRated = await data.json();
      fetch(
        "https://netflix-project-708e8-default-rtdb.firebaseio.com/toprated.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(topRated.results),
        }
      );
      const movieData = await fetch(
        "https://netflix-project-708e8-default-rtdb.firebaseio.com/toprated.json"
      );
      const movies = await movieData.json();
      
      
      dispatch(addTopRated(movies));
    };

    getTopRatedMovies();
  }, []);
};

export default useTopRated;
