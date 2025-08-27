import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { Link } from 'react-router-dom';
import axios from 'axios';
import xooth from "../Asset/xooth.png";
import xooth_logo from "../Asset/xooth_logo.png";
import "../css/Home.css";

function Forum() {
  const [isOpen, setIsOpen] = useState(false);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch data from the getAllThread API
        axios.get('https://xooth-backend.onrender.com/api/getAllThread')
            .then(res => {
                console.log('API Response:', res.data); // Debugging line
                setThreads(res.data.data); // Assuming the response has a data field containing the threads
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching threads:', err);
                setError('Failed to fetch threads');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className='text-center mt-[20rem]'>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

  let links = [

    { name: "LOGIN", link: "/login" },
    { name: "REGISTER", link: "/signup" },
    { name: "JOB SEARCH", link: "/jobs" },
  ];
  

  return (
    <div className=''>
      <section>
        <header className='bg-white w-full h-[4rem] shadow-lg'>
        <span className='xl:-mt-12'>
            <img src={xooth_logo} alt='' className='w-[15%] xl:w-[5%] m-2 p-2'/>
          </span>
        </header>
      </section>
       <div>
            <hr className='w-[95%] mt-5' />

           <div className="flex-container xl:ml-[5rem]">
              <div className="column font-semibold gap-4">
                  <a href="/" className='text-green-600'><li>HOME</li></a>
                  <a href="/forum" className='hover:text-green-600'><li>Politics</li></a>
                  <a href="/entertainment" className='hover:text-green-600'><li>Entertainment</li></a>
                  <a href="/sports" className='hover:text-green-600'><li>Sport</li></a>
            </div>

             <div className="column font-semibold gap-4">
                  <a href="/technology" className='hover:text-green-600'><li>Technology</li></a>
                  <a href="/fashion" className='hover:text-green-600'><li>Fashion</li></a>
                  <a href="/business" className='hover:text-green-600'><li>Business</li></a>
                  <a href="/religion" className='hover:text-green-600'><li>Religion</li></a>
             </div>
       </div>

             <hr className='w-[95%]' />
     </div>
      <section>
              
              <div className='xl:w-[90%] w-[95%] h-[80vh]  xl:ml-[5rem] lg:ml-[2.5rem] md:ml-[2rem] ml-[10px] mt-[3rem] rounded-md'>
             
          
                  <section className='xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] mt-3'>
                      <div className="w-[100%]  lg:w-[100%] md:w-[100%] h-screen border border-slate-200 rounded-sm">
                          {threads.map(thread => (
                              <div key={thread._id} className="mb-1 bg-gray-200 hover:bg-slate-300">
                                  <span>
                                      <div className='flex '>
                                          <p className="text-sm pl-4 pt-3 text-[#000000bb] font-bold">{thread.username} -</p>
                                          <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">{thread.time}</p>
                                      </div>
                                      <div className='flex'>
                                          <a href={`/forum-news/${thread._id}`}>
                                              <i className='font-semibold text-black p-4 cursor-pointer hover:text-[#0e7d1dee]'>
                                                  {thread.topic} ({thread.category})
                                              </i>
                                          </a>
              <span className="flex gap-4 text-sm p-1">
                   <p className="flex items-center gap-1 font-bold  cursor-pointer text-[12px]">
                      <SlLike className="text-base" /> Like
                   </p>
                   <p className="flex items-center gap-1 font-bold text-black cursor-pointer text-[12px]">
                     <SlDislike className="text-base" /> Dislike
                   </p>
              </span>

         </div>
           </span>
             </div>
                 ))}
                  </div>
                  </section>
              </div>
          </section>

      
    </div>
  );
}

export default Forum;
