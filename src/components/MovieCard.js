import React from "react";
import { IMG_CDN } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ poster_path, original_title }) => {
  return (
    <div className="flex flex-col group">
      <div className="xl:w-56 xl:h-36 md:w-52 md:h-32 w-48 h-28  flex justify-center items-center">
        <div className="xl:w-52 xl:h-32 md:w-48 md:h-28 w-44 h-24 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer overflow-hidden">
         
          <img
            alt="movie card"
            src={IMG_CDN + poster_path}
            className="h-full w-full object-cover"
            
          />
        </div>
      </div>
      <div className="text-white lg:text-sm text-[12px] font-semibold flex justify-center  group-hover:text-blue-700">
        {original_title}
      </div>
    </div>
  );
};

export default MovieCard;
