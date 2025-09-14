import React, { useState } from 'react'
import logo from "./assets/logo.jpg"
import google from "./assets/google.jpg"
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { serverUrl } from './App';
import { toast } from 'react-toastify';

function Login() {
  const [show, setShow] = useState(false)
   const [email,setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async ()=>{
    setLoading(true)
    try{
              const result =await axios.post(serverUrl + "/api/auth/login", {email, password}, {withCredentials:true})
              console.log((result.data));
              toast.success("Login successfully")
              
    }catch(error){
      console.log(error);
     
      toast.error(error.response.data.message)
      }   setLoading(false)

  }

 
  return (
    <>
       <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex justify-center items-center '>
            
            
            <form className='w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex' onSubmit={(e)=>{ e.preventDefault(); handleLogin(); }}>
               {/* //left */}
      
               <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center  gap-3'> 
                <div>
                <h1 className='font-semibold text-xl-black text-2xl'>Welcome back </h1>
                <h2 className='text-[#999797] text-[18px]'>Login your account</h2>
                  </div> 
                  
                   <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                    <label htmlFor="email" className='font-semibold cursor-pointer' >Email</label>
                    <input type="email" id='email' className='border-1 w-[100%] border-[#e7e6e6] text-[15px] px-[20px] cursor-pointer ' placeholder='Your Email ' onChange={(e)=>setEmail(e.target.value)} value={email} />
                  </div>
                   <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                    <label htmlFor="password" className='font-semibold cursor-pointer'>Password</label>
                    <input type={show ? "text": "password"} id='password' className='border-1 w-[100%] border-[#e7e6e6] text-[15px] px-[20px] cursor-pointer' placeholder='Your Password ' onChange={(e)=>setPassword(e.target.value)} value={password} />
                    {!show ?<IoEyeOutline className='absolute w-[25px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/> :
                    <IoEye className='absolute w-[25px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
                  </div>
      
                 
                 <button className='w-[80%] h-[40px] bg-black flex justify-center items-center cursor-pointer rounded-[5px] text-white' disabled={loading} onClick={handleLogin}>
  {loading ? <ClipLoader size={20} color='white'/> : "Login"}
</button>


                  <span className=' text-[13px] cursor-pointer text-[#585757]'>Forget Your Password ?</span>

                  <div className='w-[80%] flex items-center gap-2'>
                    <div className='w-[25%] h-[0.5px] bg-white '></div>
                    <div className='w-[50%] h-text[15px] text-[#6f6f6f] flex justify-center items-center '  >Or Continue</div>
                    <div className='w-[25%] h-[0.5px] bg-white'></div>
                  </div>
                  <div className='w-[80%] h-[40px] border-1 rounded-[5px]  flex justify-center items-center'>
                    <img src={google} alt="google" className='w-[25px]'/>
                    <span className='text-[18px] '></span>
                  </div>
                  <div className='text-[#6f6f6f]'>Create a new account?{' '}
                     <span className='underline underline-offset-1 text-black cursor-pointer' onClick={() => navigate("/Signup")}> Signup
                       </span>
                    </div>

                  </div> 
                {/* Right div */}
      
               <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'>
                  <img src={logo} alt="logo" className='w-[30px] shadow-2xl' />
                  <span className='text-2xl text-white'>VIRTUAL COURSES</span>
      
               </div>
            </form>
            
          </div>
    </>
  )
}

export default Login
