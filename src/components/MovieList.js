import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("m", movies);

  // Provide a default empty array if movies is null or undefined
  const movieList = movies && Array.isArray(movies) ? movies : [];

  return (
    <div className="px-2 bg-black">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
