
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>

     </Routes>
    </>
  )
}

export default App
