import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xooth_logo from "../Asset/xooth_logo.png";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import "../css/Home.css";

function Sports() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://xooth-backend.onrender.com/api/fashionThread')
      .then(res => {
        console.log('Full API Response:', res.data); // Log only the data field to focus on threads
        if (res.data && res.data.length > 0) {
          setThreads(res.data); // Data is already an array, no need to access .data.data
          console.log('Threads:', res.data); // Log to ensure it's working
        } else {
          setError('No sport threads available');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching sport threads:', err);
        setError('Failed to fetch sport threads');
        setLoading(false);
      });
  }, []);
  
  

  if (loading) {
    return <p className='text-center mt-[20rem]'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center mt-[20rem]'>{error}</p>;
  }

  if (threads.length === 0) {
    return <p className='text-center mt-[20rem]'>No threads are available.</p>;
  }

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

      <div>
            <hr className='w-[95%] mt-5' />

           <div className="flex-container xl:ml-[5rem]">
              <div className="column font-semibold gap-4">
                  <a href="/forumInterface" className='text-green-600'><li>FORUM</li></a>
                  <a href="/forum" className='hover:text-green-600'><li>Forum</li></a>
                  <a href="/politics" className='hover:text-green-600'><li>Politics</li></a>
                  <a href="/entertainment" className='hover:text-green-600'><li>Entertainment</li></a>
            </div>

             <div className="column font-semibold gap-4">
                  <a href="/technology" className='hover:text-green-600'><li>Technology</li></a>
                  <a href="/fashion" className='hover:text-green-600'><li>Fashion</li></a>
                  <a href="/sports" className='hover:text-green-600'><li>Sport</li></a>
                  <a href="/religion" className='hover:text-green-600'><li>Religion</li></a>
             </div>
       </div>

             <hr className='w-[95%]' />
     </div>

        <div className='xl:w-[90%] w-[95%] h-[80vh] xl:ml-[5rem] lg:ml-[2.5rem] md:ml-[2rem] ml-[10px] mt-[3rem] rounded-md'>
          <section className='xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] mt-3'>
            <div className="w-[100%] lg:w-[100%] md:w-[100%] h-screen border border-slate-200 rounded-sm">
              {threads.map(thread => (
                <div key={thread._id} className="mb-1 bg-gray-200 hover:bg-slate-300">
                  <span>
                    <div className='flex'>
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
      </div>
    </div>
  );
}

export default Sports;
