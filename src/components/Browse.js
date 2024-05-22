import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SedondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
const Browse = () => {

  
  return (
    useNowPlayingMovies(),
    usePopularMovies(),
    <div>
      <Header />
      <MainContainer/>
      <SedondaryContainer/>
    </div>
  );
};

export default Browse;
