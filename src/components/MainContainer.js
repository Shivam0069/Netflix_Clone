import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];

  return (
    <div className="overflow-hidden">
      <BackgroundVideo
        movieId={id}
        title={original_title}
        overview={overview}
      />
    </div>
  );
};

export default MainContainer;
