import React from 'react'
import logo from "./assets/logo.jpg"

function Signup() {
  return (
    <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex justify-center items-center '>
      
      
      <form className='w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex'>
         {/* //left */}

         <div className='md:w-[50%] w-[100%] h-[100%] flex-col justify-center items-center gap-3'> 
             
            
            </div> 
          {/* Right div */}

         <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'>
            <img src={logo} alt="logo" className='w-[30px] shadow-2xl' />
            <span className='text-2xl text-white'>VIRTUAL COURSES</span>

         </div>
      </form>
      
    </div>
  )
}

export default Signup
