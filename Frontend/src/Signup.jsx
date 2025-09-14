import React, { useState } from 'react'
import logo from "./assets/logo.jpg"
import google from "./assets/google.jpg"
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from './App';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

function Signup() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] =useState("")
  const [role,setRole]= useState("student")
  const [loading, setLoading] = useState(false)
  
    
  const handleSignup = async()=>{
    setLoading(true)
    try{
      const result = await axios.post(serverUrl + "/api/auth/signup" , {name,password,email,role},{withCredentials:true})
      setLoading(false)
      console.log(result.data);
      navigate("/")
      toast.done("Signup Successfully")

      

    }catch(error){
      setLoading(false)
      console.log(error);
      toast.error(error.response.data.message)
      

    }

  }

    return (
    <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex justify-center items-center '>
      
      
      <form className='w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex'  onSubmit={(e)=>{ e.preventDefault(); handleSignup(); }}>
         {/* //left */}


         <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center  gap-3'> 
          <div>
          <h1 className='font-semibold text-xl-black text-2xl'>let's get Started</h1>
          <h2 className='text-[#999797] text-[18px]'>Create account</h2>
            </div> 
            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
              <label htmlFor="name" className='font-semibold cursor-pointer'>Name</label>
              <input type="text" id='name' className='border-1 w-[100%] border-[#e7e6e6] text-[15px] px-[20px] cursor-pointer' placeholder='Your Name ' onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
             <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
              <label htmlFor="email" className='font-semibold cursor-pointer'>Email</label>
              <input type="email" id='email' className='border-1 w-[100%] border-[#e7e6e6] text-[15px] px-[20px] cursor-pointer ' placeholder='Your Email ' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
             <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
              <label htmlFor="password" className='font-semibold cursor-pointer'>Password</label>
              <input type={show ? "text": "password"} id='password' className='border-1 w-[100%] border-[#e7e6e6] text-[15px] px-[20px] cursor-pointer' placeholder='Your Password 'onChange={(e)=>setPassword(e.target.value)} value={password} />
              {!show ?<IoEyeOutline className='absolute w-[25px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/> :
              <IoEye className='absolute w-[25px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
            </div>

            <div className='flex md:w-[50%] w-[70%] items-center justify-between'><span className={`px-[10px] py-[5px] border-2 border-[#e7e6e6] rounded-2xl cursor-pointer hover:border-black ${role === "student" ? "border-black" : "border-[#646464]"}`}  onClick={() => setRole("student")}> Student </span>
  
         
              <span className={`px-[10px] py-[5px] border-2 border-[#e7e6e6] rounded-2xl cursor-pointer hover:border-black ${role === "educator" ? "border-black" : "border-[#646464]"}`} 
               onClick={() => setRole("educator")}> Educator</span>

           </div>

            <button type="submit"className='w-[80%] h-[40px] bg-black flex justify-center items-center cursor-pointer rounded-[5px] text-white' disabled={loading}>
              {loading ? <ClipLoader size={20} color='white' /> : "Signup"}
             </button>
            <div className='w-[80%] flex items-center gap-2'>
              <div className='w-[25%] h-[0.5px] bg-white '></div>
              <div className='w-[50%] h-text[15px] text-[#6f6f6f] flex justify-center items-center '  >Or Continue</div>
              <div className='w-[25%] h-[0.5px] bg-white'></div>
            </div>
            <div className='w-[80%] h-[40px] border-1 rounded-[5px]  flex justify-center items-center'>
              <img src={google} alt="google" className='w-[25px]'/>
              <span className='text-[18px] '></span>
            </div>
            <div className='text-[#6f6f6f]'> Already have an account?{' '}
              <span className='underline underline-offset-1 text-black cursor-pointer' onClick={() => navigate("/login")}> Login</span>
            </div>

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
