import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-2 z-10">
      <div className="text-md ml-2 font-semibold flex items-end text-white w-fit ">
        {title}
      </div>
      {movies && (
        <div  className="flex overflow-x-scroll overflow-y-hidden scrollbar-none no-scrollbar scroll-smooth">
          <div className="flex space-x-1">
            {movies.map((movie) => (
              <MovieCard
                
                key={movie.id}
                poster_path={movie.poster_path}
                original_title={movie.original_title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
