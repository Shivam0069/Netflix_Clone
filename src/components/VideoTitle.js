import React from "react";

const VideoTitle = ({ title }) => {
  console.log(title);
  return (
    <div className="w-fit z-10 absolute top-[35%] left-[5%] text-[#BABCBE]">
      <h1 className="lg:text-5xl md:text-4xl text-3xl w-[500px] font-bold text-[#BABCBE]">{title}</h1>
     
      <div className="flex gap-2 mt-5">
        <button className="lg:px-10 md:px-8 px-7 rounded-md lg:py-2 py-1 bg-white text-black lg:text-xl md:text-lg text-md">
          Play
        </button>
        <button className="lg:px-8 md:px-6 px-5  rounded-md lg:py-2 py-1 bg-black bg-opacity-50 md:text-lg text-md">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
