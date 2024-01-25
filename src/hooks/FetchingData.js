import { useDispatch } from "react-redux";
import {
  addNowPlaying,
  addPopular,
  addTopRated,
  addTrailer,
  addUpcoming,
} from "../utils/movieSlice";

export async function NowPlaying() {
  const dispatch = useDispatch();
  const movieData = await fetch(
    "https://netflix-project-708e8-default-rtdb.firebaseio.com/nowplaying.json"
  );
  const movies = await movieData.json();

  dispatch(addNowPlaying(movies));
}

export async function PopularMovie() {
  const dispatch = useDispatch();

  const movieData = await fetch(
    "https://netflix-project-708e8-default-rtdb.firebaseio.com/popular.json"
  );
  const movies = await movieData.json();

  dispatch(addPopular(movies));
}

export async function TopRated() {
  const dispatch = useDispatch();

  const movieData = await fetch(
    "https://netflix-project-708e8-default-rtdb.firebaseio.com/toprated.json"
  );
  const movies = await movieData.json();

  dispatch(addTopRated(movies));
}
export async function UpcomingMovies() {
  const dispatch = useDispatch();

  const movieData = await fetch(
    "https://netflix-project-708e8-default-rtdb.firebaseio.com/upcomingmovies.json"
  );
  const movies = await movieData.json();

  dispatch(addUpcoming(movies));
}

// const GetVideo = async () => {
//   const dispatch = useDispatch();
//   const data = await fetch(
//     "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
//     options
//   );
//   const json = await data.json();
//   const trailers = json.results.filter((video) => video.type === "Trailer");
//   const trailer = trailers.length ? trailers[0] : json.results[0];
//   dispatch(addTrailer(trailer));
// };
