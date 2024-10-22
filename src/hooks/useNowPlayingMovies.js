import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
//custom hook
const useNowPlayingMovies=()=>{
//get data from TMDB api & update the store. 
const dispatch=useDispatch();
const getNowPlayingMovies=async()=>{
const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
const json=await data.json();
dispatch(addNowPlayingMovies(json.results))
//console.log(json.results);
};
useEffect(()=>{
getNowPlayingMovies();
},[]);
}
export default useNowPlayingMovies