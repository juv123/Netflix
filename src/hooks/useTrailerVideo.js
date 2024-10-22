import React, { useEffect } from 'react'
import { addTrailerVideo } from '../Utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constants';
const useTrailerVideo = (movieId) => {
  //trailer key fetched either using state or redux store
   // const [trailerId,setTrailerId]=useState(null); //to get trailer.key
   const dispatch=useDispatch();
    const getTrailer=async()=>{
const trailer_fetch=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', API_OPTIONS);
const data=await trailer_fetch.json();
//console.log(data);
const filterData=data?.results?.filter(video=>video.type==="Trailer");
const trailer=filterData?.length?filterData[0]:data?.results[0];
dispatch(addTrailerVideo(trailer));
//console.log(trailer.key);
//setTrailerId(trailer.key);
};
useEffect(()=>{
getTrailer();
},[]);

}

export default useTrailerVideo