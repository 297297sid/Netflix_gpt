import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
    console.log("mainMovie", mainMovie);
    const { originalTitle, overview ,id} = mainMovie;
  return (
    <div>
          <VideoTitle title={originalTitle}
              overview={ overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
