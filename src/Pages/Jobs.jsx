import React, { useEffect, useState } from 'react';
import "../css/Jobs.css";
import Footer from "./footer.jsx";
import axios from 'axios';

export default function Jobs() {
   const [jobs, getJobs] = useState([]);
  

   useEffect(() => {
      axios.get("https://xooth-backend.onrender.com/api/getAllJobs")
      .then((response) =>{
         console.log("API Response", response.data);
         if (Array.isArray(response.data)) {
            getJobs(response.data);
            console.log("Jobs set:", response.data);
         } else if (response.data && Array.isArray(response.data.data)) {
            getJobs(response.data.data);
            console.log("Jobs set from data property:", response.data.data);
         } else {
            console.error("Unexpected response format:", response.data);
         }
      })
      .catch((error) => {
         console.error("Error fetching jobs:", error);
      });
   }, []);

   return (
      <div>
         <header>
            <div className='w-[90vw] h-[6vh] mx-auto bg-[rgb(2,2,39)] mt-5'>
               <a href="/" className='text-[12px] font-semibold float-right m-3 text-[#ffff] hover:text-slate-200'>Return to homepage</a>
            </div>
            <div className='w-[90vw] h-[15vh] mx-auto border border-black mt-[2px]'></div>
         </header>

         <section>
            <div className='w-[80vw] h-[8vh] mx-auto bg-[rgb(2,2,39)] mt-8 md:h-[7vh] lg:h-[8vh]'>
               <span className='flex gap-2'>
                  <input type="text" 
                     placeholder='Search for job or company'
                     className='w-[50vw] h-[5vh] pl-2 xl:lg:ml-[9rem] xl:ml-[6.5rem] lg:ml-[4rem] md:ml-[4rem]  ml-[1.5rem] mt-[10px] text-sm outline-none' 
                  />
                  <button type="submit" className="w-[15vw] h-[5vh] bg-[#0e7d1dee] text-sm p-2 text-[#ffff] mt-[10px] hover:bg-green-700 font-semibold">Search</button>
               </span>
            </div>

            <div className='mt-10 xl:ml-[10rem] ml-0  xl:text-sm lg:text-lg md:text-sm text-[8px] xl:gap-[1px] gap-[2px] space-y-2 xl:space-y-0 md:ml-[5rem] lg:ml-[7rem]'>
               <div className='xl:lg:md:space-x-[2px] space-x-[2px] flex m-2 xl:space-x-4'>
                  <span className="bg-[#0e7d1dee] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Featured Jobs</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Today Jobs</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Monday Jobs</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Tuesday Jobs</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Lastweek Jobs</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">All Jobs</span>
               </div>

               <div className='xl:lg:md:space-x-[2px] space-x-[2px] flex m-2 xl:h-[5vh] xl:space-x-4'>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Jobs By Field</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Jobs By Role</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Jobs By Industry</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Jobs By State</span>
                  <span className="bg-[#02010abb] p-2 font-semibold text-[#ffff] cursor-pointer hover:bg-[#0e7d1dee]">Jobs By Religion</span>
               </div>
            </div>
         </section>

         <section>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row xl:lg:md:ml-[5rem] ml-2 mt-5 gap-5"> 
               <section className='xl:w-[20%] lg:w-[20%] md:w-[20%] w-[100%]'>
                  <div className='xl:w-[12vw] lg:w-[12vw] md:w-[12vw] w-[70vw] xl:lg:md:ml-0 ml-11 h-[6vh] bg-[#02010abb] font-semibold text-[#ffff] text-center p-2 hover:text-[#0e7d1dee] cursor-pointer'>
                     <a href="/postedjobs">POST JOBS</a> 
                  </div>

                  <hr className='w-[72%] xl:w-[12vw] lg:w-[12vw] md:w-[12vw] bg-[#02010abb] h-1 mt-4 xl:lg:md:ml-0 ml-11'/>
                  <div className='m-3 text-[#0e7d1dee] cursor-pointer ml-[3rem] xl:ml-3 lg:ml-8 md:ml-8'>
                     <p className='hover:text-[#02010abb]'>Jobs in Lagos State</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Abuja FCT</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Rivers State</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Oyo State</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Enugu State</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Edo State</p>
                     <p className='hover:text-[#02010abb]'>Jobs in Kaduna State</p>
                     <a href="/"><p className='hover:text-[#02010abb]'>Click to view more...</p></a> 
                     <hr className='w-[72%] xl:w-[12vw] lg:w-[12vw] md:w-[12vw] bg-[#02010abb] h-1 mt-6 xl:lg:md:ml-0'/>
                  </div>
               </section>

               <section className='xl:w-[55%] lg:w-[55%] md:w-[55%] w-[95%]'>
                  <div className="w-[100%] lg:w-[100%] md:w-[100%] h-screen border border-slate-200">
                     <div className="xl:w-[48vw] lg:w-[48vw] md:w-[48vw] w-[90%] h-[6vh] border border-slate-200 m-3 mt-5">
                        <form className='flex gap-4 md:mt-3 xl:mt-0 lg:mt-0'>
                           <input type="text" 
                              placeholder='' 
                              className='w-[50%] h-[3vh] xl:ml-[8rem] lg:ml-[5rem] md:ml-[4rem] ml-[3rem] mt-[10px] border border-slate-300' 
                           />
                           <button type="submit" className='mt-2 bg-slate-400 text-[11px] border border-black hover:bg-slate-300 md:w-[4rem] p-[2px]'>Search</button>
                        </form>
                     </div>

                     {jobs.map((job, index) => (
                        <div key={index}>
                           <span>
                              <h1 className='font-bold p-3 text-[#0e7d1dee] cursor-pointer hover:text-[#02010abb]'>{job.role} Needed at {job.recruiter}({job.location})</h1>
                              <i className='p-3 font-semibold'>Posted on {new Date(job.postedDate).toDateString()}</i>
                              <p className='p-3 font-extralight'>{job.job_description}</p>
                              <div className='flex justify-between'>
                                 <span>
                                    <p className='p-3'>Salary: <strong className="font-bold">{job.salary}</strong></p>
                                 </span>
                                 <span className='m-10'>
                                    <a href="/apply"><button type="submit" className='bg-[#02010abb] text-[#fff] font-semibold w-[5rem] h-[2.5rem] rounded-lg hover:bg-[#0e7d1dee]'>Apply</button></a>
                                 </span>
                              </div>
                           </span>
                           <hr />
                        </div>
                     ))}
                  </div>
               </section>

               <section className='w-[25%]'>
                  <p>Third Div</p>
               </section>
            </div>
         </section>
           <Footer />
      </div>
      
   );
}
