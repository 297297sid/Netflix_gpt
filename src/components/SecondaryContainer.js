import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className= '  bg-black'>
      <div className='-mt-52   pl-12 relative z-20'>
      <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Inspirational"} movies={movies.nowPlayingMovies} />
      </div>
      
     

    
    
    
    </div>
  )
}

export default SecondaryContainer