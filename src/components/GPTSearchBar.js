import React, { useRef } from 'react';
import lang from '../Utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openAi from '../Utils/openAi';
import { API_OPTIONS } from '../Utils/Constants';
import { addGptMovieResults } from '../Utils/gptSlice.js';
const GPTSearchBar = () => {
  const language=useSelector(store=>store.config.language);
  const gptMovies=useSelector(store=>store.gpt.gptMovies);
  const dispatch=useDispatch();
    const searchInput=useRef(null);
      const searchTMDB=async(movie)=>{
     const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie,API_OPTIONS);
     const json=await data.json();
     return json.results
  
    };
  const handleGptSearch=async()=> {
    const gptQuery="act as a movie recommendation system and suggest some movies for the query:"+searchInput.current.value+"only give me names of movies,comma separated"
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
          });
    if(!gptResults.choices){
      //err handling code
      throw Error("<h1>No results</h1>");
    }
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");//array of movies
    //console.log(gptMovies)
    //searchTMDB api for each movies
   // gptMovies.map((movie) =>searchTMDB(movie));
      const promiseArray=gptMovies.map((movie) => searchTMDB(movie));//return promise array
        const tmdbResults=await Promise.all(promiseArray);
       // console.log(tmdbResults)
         dispatch(addGptMovieResults({movieNames:gptMovies, movieResults:tmdbResults}));
    
  }
  return (
    <div className='pt-[30%] sm:pt-[5%] md:pt-[10%] flex justify-center'>
    <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
    <input type="text" className="col-span-9 p-4 m-4" ref={searchInput} placeholder={lang[language].gptSearchPlaceholder}/>
    <button className='col-span-3 m-4 py-2 px-4 rounded bg-red-700 text-white' onClick={handleGptSearch}>{lang[language].search}</button>
    </form>
    </div>
  )
}
export default GPTSearchBar;