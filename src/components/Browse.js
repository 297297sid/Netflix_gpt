import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SedondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  return (
    useNowPlayingMovies(),
    usePopularMovies(),
    useTopRatedMovies(),
    useUpcomingMovies(),
    (
      <div>
        <Header />
        <MainContainer />
        <SedondaryContainer />
      </div>
    )
  );
};

export default Browse;
