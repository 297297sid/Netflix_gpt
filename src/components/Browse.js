import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SedondaryContainer from './SecondaryContainer';
const Browse = () => {

  
  return (
    useNowPlayingMovies(),
    <div>
      <Header />
      <MainContainer/>
      <SedondaryContainer/>
    </div>
  );
};

export default Browse;
