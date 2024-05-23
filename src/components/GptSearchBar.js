import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux"; 
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice"

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' + movie
            , API_OPTIONS
        );
        const json = await data.json();
        return json.results;

    }


    const handleGptSearchClick = async() => {
        console.log(searchText.current.value);
        const gptQuery = "Act as a Movie Recommendation and suggest some movie for the query : "+searchText.current.value+" only give me name of 5 movies, comma seprated like result given ahead.Example Result: Don,Sholay,Gadar,Krish,Singham";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResults.choices) {
            
        }
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
       const promiseArray=gptMovies.map(movie => searchMovieTMDB(movie))
      // const promiseArray=gptMovies.map(movie => searchMovieTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    }
    return (
      
        <div className="pt-[10%]  flex justify-center">
            
      <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input
                    ref={searchText}
          type="text"
          className="p-4 m-4  col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="px-2 py-4 m-4 bg-red-700 col-span-3 text-white rounded-lg " onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
