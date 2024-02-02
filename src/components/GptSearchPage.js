import React, { useRef } from "react";
import Header from "./Header";
import { getMovie, gptMovie } from "../utils/openAi";

export default function GptSearchPage() {
  const inputRef = useRef("");

  async function movieSearchHandler() {
    const inputValue = inputRef.current.value.trim();

    if (inputValue) {
      console.log("Searching for:", inputValue);
      const gptResult = await gptMovie(inputValue);

      const promisesArray = gptResult?.map((movie) => getMovie(movie));
      const tmdbResults = await Promise.all(promisesArray);
      console.log("gpt", gptResult);
      console.log("tmdb", tmdbResults);
    } else {
      console.log("Input is empty");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      movieSearchHandler();
    }
  }
  const backgroundStyle = {
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <div className="h-screen w-screen " style={backgroundStyle}>
      <Header />
      <div className="w-full pt-24  flex justify-center items-center  ">
        <input
          ref={inputRef}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Describe the movie you want...?"
          className=" 
        w-[45%] focus:outline-none py-2 px-4 text-md rounded-l-full bg-white/50 placeholder-black 
        "
        />
        <button
          onClick={movieSearchHandler}
          className="bg-blue-700 px-5 py-2 rounded-r-full hover:border-blue-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}
