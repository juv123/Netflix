import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
//custom hook
const useUpcomingMovies=()=>{
//get data from TMDB api & update the store. 
const dispatch=useDispatch();
const getUpcomingMovies=async()=>{
const data=await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
const json=await data.json();
dispatch(addUpcomingMovies(json.results))
//console.log(json.results);
};
useEffect(()=>{
getUpcomingMovies();
},[]);
}
export default useUpcomingMovies