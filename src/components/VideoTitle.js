import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black" >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button
          className="bg-white text-black p-4 px-16 text-lg bg-opacity-50 rounded-lg  hover:bg-opacity-100
              "
        >
          ▶️ Play
        </button>
        {/* <button
          className="bg-black text-white p-4 px-16 text-lg bg-opacity-50 rounded-lg
              "
        >
          ▶️ Play
        </button> */}
        <button
          className="mx-2 bg-white text-black p-4 px-16 text-lg bg-opacity-50 rounded-lg
              "
        >
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
