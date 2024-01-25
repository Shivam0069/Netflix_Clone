import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const movies = useSelector((store) => store.movies);

  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div className="min-h-fit overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
     
    </div>
  );
};

export default Browse;
