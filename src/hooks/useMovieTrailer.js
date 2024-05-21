import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
 
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=es-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("json", json);
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log("tt", trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
  return (
    <div>useMovieTrailer</div>
  )
}
