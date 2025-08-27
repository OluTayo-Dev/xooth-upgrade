import React from 'react'
import xooth from "../Asset/xooth.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
    const [resetPassword, setResetPassword] = useState({
        email: '',
    })
  
    const navigate = useNavigate();
    function handleChange(event) {
        const newObj = {...resetPassword, [event.target.name]: event.target.value}
        setResetPassword(newObj)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("https://xooth-backend.onrender.com/api/forgotPassword", resetPassword)
            .then((res) => {
                console.log(res.data)
                navigate("/login");
                alert("Password reset link sent successfully")
            })
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
         <form onSubmit={handleSubmit} className='ml-[15vw] mt-[10vh] w-[75%] xl:w-[37.5vw] xl:ml-[28vw] lg:h-[78vh] h-[74vh] bg-[#ffff] shadow-lg'>
                    <div className=''>
                        <img src={xooth} alt="" className="w-[15rem] xl:ml-[8rem] ml-[1rem] md:ml-[8rem] lg:ml-[15rem]" />
                    </div>
                
                    <div className='gap-4'>
                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Email Address:</label>
                        <br />
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            placeholder='Email'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />
                        
                      
                    </div>
                    <div className='mt-2 ml-[2rem] md:ml-[5rem] xl:ml-[70px]'> 
                        <button type="submit" className='w-[90%] h-[2rem] bg-green-500 rounded-sm text-[#ffff]  text-sm mt-2'>Reset Password</button>
                    </div>
                </form>
    </div>
  )
}

export default ForgotPassword