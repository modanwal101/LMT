
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup';
import Login from './Login';
 import { ToastContainer, toast } from 'react-toastify';

export const serverUrl = "http://localhost:8000";


function App() {
  return (
    <>
      <ToastContainer />
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>

     </Routes>
    </>
  )
}

export default App
