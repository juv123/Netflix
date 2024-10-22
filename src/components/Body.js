import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { auth } from '../Utils/Firebase';
const Body = () => {
const dispatch=useDispatch()//always use on top of component
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />

    },
]);

  return (
    <div>
        <RouterProvider router={appRouter} />
         </div>
  )
}

export default Body