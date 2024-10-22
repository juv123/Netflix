import React from 'react'
import { IMG_CDN } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48">
        <img alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
}

export default MovieCard