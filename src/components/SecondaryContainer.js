import React, { Fragment } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return movies.upcoming &&
    movies.topRated &&
    movies.trailer &&
    movies.Popular &&
    movies.nowPlaying ? (
    <div className="bg-black ">
      <div className="relative   pb-4 pt-5 pl-2 ">
        <div
          className="mb-8"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <MovieList title={"Continue Watching"} movies={movies.upcoming} />
        </div>
        <div
          className="mb-8"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <MovieList title={"Popular"} movies={movies.Popular} />
        </div>
        <div
          className="mb-8"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <MovieList title={"Top Rated"} movies={movies.topRated} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default SecondaryContainer;
