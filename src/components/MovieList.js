import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className='p-6'>
    <div className="flex overflow-x-auto no-scrollbar pl-10">
        <h1 className="text-lg sm:text-xl md:text-3xl absolute">{title}</h1>
        <div className="flex pt-12">
            {movies?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} />
            )
            }
            
        </div>
    </div>
    </div>
  )
}

export default MovieList