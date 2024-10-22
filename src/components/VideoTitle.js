import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r">
     <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
     <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
     <div className ="my-4 md:m-0">
        <button className="bg-white text-black h-8 px-2 md:px-6 text-xl text-center rounded hover:bg-opacity-40">⨞Play</button>
        <button className="mx-2 bg-gray-500 text-black h-8 px-2 md:px-7 text-xl text-center rounded">More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle