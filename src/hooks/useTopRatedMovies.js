import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
//custom hook
const useTopRatedMovies=()=>{
//get data from TMDB api & update the store. 
const dispatch=useDispatch();
const getTopRatedMovies=async()=>{
const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
const json=await data.json();
dispatch(addTopRatedMovies(json.results))
//console.log(json.results);
};
useEffect(()=>{
getTopRatedMovies();
},[]);
}
export default useTopRatedMovies