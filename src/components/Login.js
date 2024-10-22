import { useRef, useState } from "react"
import Header from "./Header"
import {validateData} from "../Utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser} from '../Utils/userSlice';
import { useDispatch } from "react-redux";
import { LOGO, photoURL } from "../Utils/Constants";
const Login = () => {
  const [loginStatus,setLoginStatus]=useState(true);
  const [errMsg,setErrMsg]=useState(null);
  const email=useRef(null);
  const pwd=useRef(null);
  const name=useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
const handleValidations=()=>{
  //const msg=validateData(email.current.value,pwd.current.value,name.current.value);
  const msg=validateData(email.current.value,pwd.current.value);
  console.log(msg);
  setErrMsg(msg);
  if(msg) return//if error
  if(!loginStatus)//SignUp
  {
    createUserWithEmailAndPassword(auth, email.current.value,pwd.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);  
      updateProfile(user, {
        displayName:name.current.value, photoURL: photoURL
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              // ...
      }).catch((error) => {
        // An error occurred
        setErrMsg(error.message)
        // ...
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode+"-"+errorMessage);
      // ..
    });

  

}
else{ //signin
  signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
        // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode+"-"+errMsg);
  });
}
  }
   
  const handleClick=()=>{
    setLoginStatus(!loginStatus);
  }
  return (
    <div>
    <Header />
    <div>
    <img className="h-screen object-cover md:h-auto w-65" src={LOGO} alt="logo"/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className="absolute p-8 w-full md:w-4/12 bg-black my-36 mx-auto right-0 left-0 top-0  text-white bg-opacity-80">
       <h1 className="font-bold text-lg md:text-3xl">{loginStatus ?"SignIn":"SignUp"}</h1>
          {!loginStatus && <input type="text" ref={name} placeholder="Full Name" className="w-full bg-slate-600 p-1 m-1"/>}
    <input type="text" ref={email} placeholder="Email ID" className="w-full bg-slate-600 p-1 m-1"  />
    <input type="password" ref={pwd} placeholder="Password" className="w-full bg-slate-600 p-1 m-1"  autoComplete="true" />
    <p className="text-red-600 text-lg">{errMsg}</p>
     <button className="bg-red-700 rounded w-full m-1" onClick=
      {handleValidations}
      >{loginStatus ? "SignIn":"SignUp"}</button>
        {loginStatus && <p onClick={handleClick} className="text-center">New to Netflix?.Signup Now.</p>}
        {!loginStatus && <p onClick={handleClick} className="text-center">Already Have an account?.Please Signin.</p>}
    </form>
    </div>
  )
}

export default Login