import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Professionals from '../Professionals/Professionals.jsx';
import Dating from '../Dating/Dating.jsx';
import ProjectResourcePerson from './ProjectResourcePerson.jsx';
import Sales from './Sales.jsx';
import Jobs from './Jobs.jsx';
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
import { FaCar, FaHome, FaMobileAlt, FaTv } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
import Header from '../Pages/Header.jsx';
import Footer from '../Pages/footer.jsx';
import "../css/Connect.css"; 
import "../css/navbar.css";
import "../css/Homepage.css";
import categories from '../category/markets.jsx';

  
const sampleProducts = [
  { id: 1, name: "Toyota Corolla 2010", price: "₦2,500,000", desc: "Neatly used, Lagos cleared", location: "Ikeja, Lagos", image: "https://i.imgur.com/SZnoUGt.jpeg" },
  { id: 2, name: "iPhone 13 Pro Max", price: "₦700,000", desc: "UK Used, 128GB", location: "Ibadan, Oyo", image: "https://i.imgur.com/yg5SYqh.jpeg" },
  { id: 3, name: "3-Bedroom Apartment", price: "₦30,000,000", desc: "Lekki Phase 1, Fully Furnished", location: "Lekki, Lagos", image: "https://i.imgur.com/AvtJlVC.jpeg" },
  { id: 4, name: "Samsung Smart TV", price: "150,000", desc: "Samsung 32 inches Smart TV", location: "Ibadan, Oluyole", image: "https://i.imgur.com/vqJ5eGk.jpeg" },
];


 
function Connect() {
   const [activeSection, setActiveSection] = useState('');
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="flex flex-col min-h-screen">
     {/* {Header} */}
       <Header />
       <div className="max-w-7xl  px-4 py-6">
  <div className="hidden md:flex gap-6">
    {/* ASIDE (Desktop Only) */}
  <aside className="w-1/4 bg-white rounded-lg shadow p-4 hidden md:block">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <ul className="space-y-3">
        {categories.map((cat, idx) => (
          <li key={idx} className="relative group">
            {/* Main Category with Link */}
            <Link
              to={cat.path}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium">{cat.name}</span>
            </Link>

            {/* Subcategories - appear on hover */}
            {cat.sub && (
              <ul className="absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
                {cat.sub.map((s, i) => (
                  <li key={i}>
                    <Link
                      to={s.path}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span>{s.name}</span>
                      <span className="ml-auto text-xs text-gray-400">
                        0 in stock
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>

    {/* RIGHT CONTENT (70%) */}
    <main className="w-2/3 space-y-6">
      {/* TOP ACTION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow flex flex-col items-center  h-[32vh]">
          <Link 
            to="/jobs">
            <img src="https://i.imgur.com/ZBa2MjF.jpeg" alt="job" className="mb-3 w-[90%] object-cover" />
            <h3 className="font-bold text-center">Apply for Job</h3>
            <p className="text-sm text-gray-600 text-center">Find your next opportunity</p>
          </Link>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow flex flex-col items-center h-[32vh]">
          <Link
           to="/marketsplace">
           <img src="https://i.imgur.com/8my6wtg.jpeg" alt="sell" className="mb-3 w-[90%] object-cover" />
           <h3 className="font-bold text-center">Want to Sell?</h3>
           <p className="text-sm text-gray-600 text-center">Post your item in minutes</p>
          </Link>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg shadow flex flex-col items-center h-[32vh]">
          <Link
            to="/forum">
            <img src="https://i.imgur.com/fzg6JmU.jpeg" alt="buy" className="mb-3 w-[90%] h-[17vh] object-cover" />
            <h3 className="font-bold text-center">Dating</h3>
            <p className="text-sm text-gray-600 text-center">Connect with friends</p>
          </Link>
        </div>

        
        <div className="bg-yellow-100 p-4 rounded-lg shadow flex flex-col items-center h-[32vh]">
          <Link
            to="/forum">
            <img src="https://i.imgur.com/fzg6JmU.jpeg" alt="buy" className="mb-3 w-[90%] h-[17vh] object-cover" />
            <h3 className="font-bold text-center">Hire</h3>
            <p className="text-sm text-gray-600 text-center">Hire Professionals</p>
          </Link>
        </div>
      </div>

      {/* PRODUCT LISTINGS */}
      <div>
        <h2 className="font-bold text-xl mb-4">Recently Posted Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-blue-600 font-bold">{p.price}</p>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <p className="text-xs text-gray-500 mt-1">{p.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>

  {/* MOBILE VIEW */}
  <div className="md:hidden space-y-6">
    {/* Categories as mini grid */}
    <div>
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
           <Link 
             to={cat.path} 
             className="flex flex-col items-center cursor-pointer"
            >
         <img 
          src={cat.img} 
          alt={cat.name} 
          className="w-12 h-12 rounded mb-1" 
        />
        <span className="text-xs">{cat.name}</span>
     </Link>
          </div>
        ))}
      </div>
    </div>

  {/* Top Action Cards */}
<div className="flex justify-between gap-2 sm:gap-4">
  <div className="flex-1 bg-blue-100 p-2 sm:p-4 rounded-lg shadow flex flex-col text-center">
    <Link 
     to="/jobs">
    <img
      src="https://i.imgur.com/ZBa2MjF.jpeg"
      alt="job"
      className="mb-2 sm:mb-3 w-12 h-12 sm:w-16 sm:h-16 ml-[-8px]"
    />
    <h3 className="font-bold text-xs sm:text-base ml-[-1rem]">Apply for Job?</h3>
    </Link>
  </div>

  <div className="flex-1 bg-green-100 p-2 sm:p-4 rounded-lg shadow flex flex-col items-center text-center">
    <Link
     to="/marketsplace">
    <img
      src="https://i.imgur.com/8my6wtg.jpeg"
      alt="sell"
      className="mb-2 sm:mb-3 w-12 h-12 sm:w-16 sm:h-16 ml-[-8px]"
    />
     <h3 className="font-bold text-xs sm:text-base ml-[-1rem]">Want to Sell?</h3>
    </Link>
  </div>

  <div className="flex-1 bg-yellow-100 p-2 sm:p-4 rounded-lg shadow flex flex-col items-center text-center">
    <Link
      to="/dating">
    <img
      src="https://i.imgur.com/fzg6JmU.jpeg"
      alt="buy"
      className="mb-2 sm:mb-3 w-12 h-12 sm:w-16 sm:h-16 ml-[-8px]"
    />
     <h3 className="font-bold text-xs sm:text-base ml-[-1rem]">Dating?</h3>
    </Link>
  </div>

    <div className="flex-1 bg-gray-100 p-2 sm:p-4 rounded-lg shadow flex flex-col items-center text-center">
    <Link
      to="/professionals">
    <img
      src="https://i.imgur.com/fzg6JmU.jpeg"
      alt="buy"
      className="mb-2 sm:mb-3 w-12 h-12 sm:w-16 sm:h-16 ml-[-8px]"
    />
      <h3 className="font-bold text-xs sm:text-base ml-[-1rem]">Hire?</h3>
    </Link>
  </div>
</div>

    {/* Products */}
    <div>
      <h2 className="font-bold text-xl mb-4">Recently Posted Items</h2>
      <div className="grid grid-cols-2 gap-4">
        {sampleProducts.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow p-2 cursor-pointer hover:shadow-lg">
            <img src={p.image} alt={p.name} className="w-full h-24 object-cover rounded mb-2" />
            <h3 className="text-sm font-semibold">{p.name}</h3>
            <p className="text-blue-600 font-bold text-xs">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

     
     {/* {Footer} */}
     <Footer />
    </div>
  );
}

export default Connect;
