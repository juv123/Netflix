import React, { useEffect } from 'react'
import { auth } from "../Utils/Firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { NETFLIX_LOGO } from '../Utils/Constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/Constants';
import { changeLanguage } from '../Utils/configSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
  const gpt=useSelector(store=>store.gpt.showGptSearch);
  const handleSignout=() => {
    signOut(auth).then(() => {
      // Sign-out successful.
         }).catch((error) => {
      // An error happened.
    });
  } 
  const handleGPTSearchClick=() => {
    //Toggle GPT search btn
    dispatch(toggleGptSearchView());
      
  }
  const handleChangeLanguage=(e)=>{
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
           navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
         
          // ...
        }
      });
      return()=>unsubscribe();//unsubscribe when component is unmounted
},[]);

  return (
    
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between bg-black sm:bg-blue-700 md:bg-green-900">
        <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo"/>
       { user && (
       <div className="flex p-2">
        {gpt && <select className='p-2 m-2' onChange={handleChangeLanguage}>
          {SUPPORTED_LANGUAGES.map(language=><option key={language.identifier} value={language.identifier} >{language.name}</option>
                    )}
         
          </select>
         }
        <button className="py-2 px-4 mx-4 my-2 bg-green-700 text-white rounded-lg" onClick={handleGPTSearchClick}>{gpt?"<<Home":"GPT search"}</button>
    <img className="w-14 h-14" src={user?.photoURL} alt="signout"/>
  <button className="font-bold text-white text-xs " onClick={handleSignout}>Signout</button>
</div>
       )}
</div>

  )
}

export default Header