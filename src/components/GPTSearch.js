import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { LOGO } from '../Utils/Constants'

const GPTSearch = () => {
  //GPT SEARCH
  return (
    <>
    <div className="fixed -z-10">
    <img className="h-screen object-cover md:h-auto" src={LOGO} alt="logo" />
         </div>
    <div className="pt-[30%] md:p-0">
               <GPTSearchBar />
            <GPTMovieSuggestions />
            </div>
            </>
  )
}

export default GPTSearch