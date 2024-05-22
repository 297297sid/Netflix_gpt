import React,{useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

import { useDispatch } from "react-redux";


const usePopularMovies = () => {



    const dispatch = useDispatch();

    const getAddPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("POPULARMOVIE",json.results);
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(() => {
        getAddPopularMovies();
    }, []);
    
}
export default usePopularMovies;