
import React,{useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

import { useDispatch } from "react-redux";


const useUpcomingMovies = () => {



    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        // "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("upcoming MOVIE",json.results);
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
        getUpcomingMovies();
    }, []);
    
}
export default useUpcomingMovies;