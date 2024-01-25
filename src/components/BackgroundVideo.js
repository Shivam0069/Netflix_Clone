import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import MovieList from "./MovieList";
import VideoTitle from "./VideoTitle";

const BackgroundVideo = ({ movieId, title }) => {
  const videoRef = useRef(null);
  const movies = useSelector((store) => store.movies);
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailer);
  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    
    if (trailerVideo) {
      videoRef.current.src = `https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerVideo.key}`;
    }
  }, [trailerVideo]);

  return (
    <div className="relative h-screen bg-black">
      <iframe
        ref={videoRef}
        className="w-screen  h-screen object-cover"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <VideoTitle  title={title}  />
      <div className="relative z-10 bottom-52 left-3 overflow-x-auto  max-w-screen ">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      </div>
    </div>
  );
};

export default BackgroundVideo;
