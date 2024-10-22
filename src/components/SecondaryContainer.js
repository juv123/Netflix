import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
      <div className='pt-0 md:pt-2 pl-4 md:pl-12 relative z-20 text-white'>
       <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Popular"} movies={movies.popularMovies} />
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
       <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
       </div>
    { /*
    -movielists-popular,trending,now playing,horror ...
    -movie card*n
      */
  }
 
    </div>
  )
}

export default SecondaryContainer