import React from 'react'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import "../css/Connect.css"; 
import "../css/navbar.css";

export default function Footer() {
  
  return (
    <div>
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
  )
}
