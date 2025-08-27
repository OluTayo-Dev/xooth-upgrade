import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Professionals from '../Professionals/Professionals.js';
import Dating from '../Dating/Dating';
import ProjectResourcePerson from './ProjectResourcePerson';
import Sales from './Sales';
import Jobs from './Jobs';
import img from "../Asset/img.png";
import xooth_logo from "../Asset/xooth_logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import "../css/Connect.css"; 
import "../css/navbar.css";
import "../css/Homepage.css";

function Connect() {
  const [activeSection, setActiveSection] = useState('');
   const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full flex-grow">
      <header className="bg-[rgb(2,2,39)] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={xooth_logo} alt="Xooth Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold">Xooth</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/news" className="hover:text-green-400">NEWS</Link>
          <Link to="/forumInterface" className="hover:text-green-400">FORUM</Link>
          <Link to="/jobs" className="hover:text-green-400">JOBS</Link>
          <Link to="/login">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-sm">
              LOGIN
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Open menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[rgb(2,2,39)] w-full">
          <ul className="flex flex-col space-y-2 px-4 pb-4">
            <li>
              <Link to="/news" onClick={() => setIsOpen(false)} className="block py-2 hover:text-green-400">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/forumInterface" onClick={() => setIsOpen(false)} className="block py-2 hover:text-green-400">
                FORUM
              </Link>
            </li>
            <li>
              <Link to="/jobs" onClick={() => setIsOpen(false)} className="block py-2 hover:text-green-400">
                JOBS
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-[20vw] p-4 bg-green-600 text-[#ffff] hover:bg-green-700 px-4 py-2 rounded text-sm">
                  LOGIN
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
        <div className="w-full flex flex-col md:flex-row pt-[3rem]">
          <div className='mt-5 mx-auto'>
            <img src={img} alt="" className='w-full ml-10 xl:ml-0' />
          </div>

          <div className="xl:lg:md:w-1/2 w-full mx-auto mt-8">
            <div className="flex flex-col space-y-2 xl:lg:md:w-full w-full xl:mt-[5rem] mt-3 mx-auto">
               <p className="max-w-xl xl:text-xl text-lg text-black font-light justify-center md:text-left p-2">
                  Our real-time chat and platform allows you to connect with prospective dates, friends, business partners, and soulmates.
               </p>

                <button type="submit" id="btn" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 pl-[5rem] rounded-md hover:bg-blue-700 transition"><FaArrowLeftLong className="text-white text-lg" /> Get Started</button>
            </div>  

           <div className='group_1'>
               <Link to="/dating"><div className="group relative  bg-gray-200 flex justify-center items-center    rounded-xl shadow-md cursor-pointer" id="member"> <GiLovers className="text-[rgb(2,2,39)] text-2xl" /> <span className="absolute bottom-2 text-[11px] text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Dating </span>
              </div></Link>
                <Link to="/marketsplace"><div className="group relative  bg-gray-200 flex justify-center items-center    rounded-xl shadow-md cursor-pointer" id="member"> <IoMdCart className="text-[rgb(2,2,39)] text-2xl" /> <span className="absolute bottom-2 text-[11px] text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> MarketPlace </span>
              </div></Link>
                <Link to="/professionals"><div className="group relative  bg-gray-200 flex justify-center items-center    rounded-xl shadow-md cursor-pointer" id="member"> <SiLinuxprofessionalinstitute className="text-[rgb(2,2,39)] text-2xl" /> <span className="absolute bottom-2 text-[11px] text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Professionals</span>
              </div></Link>
           </div>   
         </div>
        
        </div>   
      </section>
     
       <footer className='w-full min-h-[25vh] justify-between p-4'>
           <div className='flex-col md:lg:xl:flex-row justify-center space-y-10 xl:space-y-0 ml-[7rem] xl:ml-0'>
               <div>
                 <h1 className="text-[#ffff] font-bold xl:text-4xl text-xl mt-4 xl:mt-0">XOOTH</h1>
                 <p className='font-light text-center'>Connect effortlessly with xooth</p>
               </div>

               <div className='flex gap-2 xl:text-3xl text-xl font-bold xl:ml-8'>
                 <CgFacebook className='cursor-pointer'/>
                 <FaXTwitter  className='cursor-pointer'/>
                 <FaInstagram className='cursor-pointer'/>
             </div>
           </div>
        
       </footer>
    </div>
  );
}

export default Connect;
