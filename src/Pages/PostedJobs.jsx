import React from 'react'
import "../css/Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function PostedJobs() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    role: '',
    recruiter: '',
    job_description: '',
    qualification: '',
    location: '',
    category: '',
    salary: '',
 })
    const onChangeHandler = (e) => {
      setInput({...input, [e.target.id]: e.target.value});
    };

   
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{

        const token = localStorage.getItem('token');

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const res = await axios.post("https://xooth-backend.onrender.com/api/postJob", input, config);
        console.log(res.data)
        navigate("/jobs")
        alert("Job posted successfully")
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}className='float-center border border-slate-300 rounded-lg xl:w-[35vw] lg:w-[65%] lg:h-[100%] w-[90%] xl:ml-[27rem] h-[95vh] xl:h-[95vh] lg:ml-[10rem] md:ml-[3rem] ml-5 mt-[5rem] h-[70vh] bg-gray-100 shadow-xl'> 
            <div className='space-y-2 xl:lg:md:space-y-1 xl:space-x-6 md:space-x-6 ml-5 xl:ml-2 mt-5 flex flex-col '>
             <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2 xl:pl-4 lg:pl-4 md:pl-4'>Role:</label>
               <input
                type="text" 
                placeholder='Role' 
                className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                id="role"
                value={input.role}
                onChange={onChangeHandler}
                required
                />

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2 xl:pl-2 lg:pl-4 md:pl-4'>Company Name:</label>
               <input
                type="text" 
                placeholder='Company Name' 
                className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                id="recruiter"
                value={input.recruiter}
                onChange={onChangeHandler}
                required
                />

                <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Job Description:</label>
               <input 
                type="text" 
                placeholder='Job Description' 
                className='xl:w-[30vw] lg:w-[57vw] md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                id="job_description"
                value={input.job_description}
                onChange={onChangeHandler}
                required
                />
                
                <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2 xl:pl-4 lg:pl-4 md:pl-4'>Qualification:</label>
                <input
                 type="text" 
                 placeholder='Qualification' 
                  className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                 id="qualification"
                 value={input.qualification}
                 onChange={onChangeHandler}
                 required
                />

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Salary:</label>
               <input 
                type="text" 
                placeholder='Salary' 
                className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg'
                id="salary" 
                value={input.salary}
                onChange={onChangeHandler}
                required
                />

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Location:</label>
               <select id="location" onChange={onChangeHandler} className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg'>
                 <option>select</option>
                 <option>Ibadan</option>
                 <option>Lagos</option>
                 <option>Abuja</option>
                 <option>Rivers</option>
                 <option>Enugu</option>
                 <option>Kaduna</option>
               </select>

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Category:</label>
               <select id="category" onChange={onChangeHandler} className='xl:w-[30vw] lg:w-[57vw] md:w-[90%] w-[90%] h-[5vh] outline-0 p-2 border border-[#02010abb] shadow-lg'>
                 <option>select</option>
                 <option>Technology</option>
                 <option>Engineering</option>
                 <option>Health</option>
                 <option>Sales & Marketing</option>
                 <option>Agriculture</option>
                 <option>Education</option>
               </select>
            </div>
            <button type="submit" className='mt-7 bg-[#02010abb] w-[70%] h-[3rem] text-[#fff] font-semibold  hover:bg-black rounded-md xl:ml-[5rem] md:ml-[6.2rem] ml-[3rem]'>POST JOB</button>
        </form>
    </div>
  )
}

export default PostedJobs