import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import xooth_logo from "../Asset/xooth_logo.png";
import "../css/Home.css";
import "../css/marketplace.css";
import { Link } from "react-router-dom";

function Phones() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3500/api/phones')
      .then((res) => {
        console.log('Full API Response:', res.data);
        if (res.data && res.data.data && res.data.data.length > 0) {
          setItems(res.data.data);
          console.log('Items:', res.data.data);
        } else {
          setError('No items available');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
        setError('Failed to fetch items');
        setLoading(false);
      });
  }, []);

 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  if (loading) {
    return <p className="text-center mt-[20rem]">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-[20rem]">{error}</p>;
  }

  if (items.length === 0) {
    return <p className="text-center mt-[20rem]">No items are available.</p>;
  }

  const categories = ['Real Estate', 'Electronics', 'Furniture', 'Shoes'];

  return (
    <div className="">
      <section>
        <header className="bg-white w-full h-[4rem] shadow-lg">
          <span className="xl:-mt-12">
            <img src={xooth_logo} alt="" className="w-[15%] xl:w-[5%] m-2 p-2" />
          </span>
        </header>
      </section>

      <div>
        <div>
          <hr className="w-[95%] mt-5" />

          <div className="flex-container xl:ml-[5rem]">
            <div className="column font-semibold gap-4">
              <a href="/" className="text-green-600">
                <li>HOME</li>
              </a>
              <a href="/forum" className="hover:text-green-600">
                <li>Forum</li>
              </a>
              <a href="/politics" className="hover:text-green-600">
                <li>Politics</li>
              </a>
              <a href="/entertainment" className="hover:text-green-600">
                <li>Entertainment</li>
              </a>
            </div>

            <div className="column font-semibold gap-4">
              <a href="/technology" className="hover:text-green-600">
                <li>Technology</li>
              </a>
              <a href="/fashion" className="hover:text-green-600">
                <li>Fashion</li>
              </a>
              <a href="/sports" className="hover:text-green-600">
                <li>Sport</li>
              </a>
              <a href="/religion" className="hover:text-green-600">
                <li>Religion</li>
              </a>
            </div>
          </div>

          <hr className="w-[95%]" />
        </div>

        <div className="xl:w-[90%] w-[95%] h-[80vh] xl:ml-[5rem] lg:ml-[2.5rem] md:ml-[2rem] ml-[10px] mt-[3rem] rounded-md">
          <div className="flex xl:gap-8 gap-0 justify-between">
            <span className="relative">
              <button
                type="button"
                className="bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800"
                onClick={toggleDropdown}
              >
                {selectedCategory ? `Category: ${selectedCategory}` : 'Select Category'}
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48">
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>

            <span>
        
                <button
                  type="submit"
                  className="bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800" onClick={openModal}
                >
                  POST ITEM
                </button>
        
            </span>
          </div>

          <section className="xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] mt-3">
            <div className="w-[100%] lg:w-[100%] md:w-[100%] h-screen border border-slate-200 rounded-sm">
              {items.map((item) => (
                <div key={item._id} className="mb-1 bg-gray-200 hover:bg-slate-300">
                  <div className="flex">
                    <p className="text-sm pl-4 pt-3 text-[#000000bb] font-bold">
                      {item.itemName || 'Unnamed Item'} -
                    </p>
                    <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
                      {item.itemType || 'Unknown Type'}
                    </p>
                    <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
                      {item.itemDescription || 'Unknown Description'}
                    </p>
                    <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
                      #{item.price || 'Unknown Price'}
                    </p>
                    <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
                      {item.location || 'Unknown Location'}
                    </p>
                  </div>
                  <div className="flex">
                    <a href={`/forum-news/${item._id}`}>
                      <img
                        src={item.itemImage}
                        alt={item.itemDescription}
                        className="w-[100px] h-[100px] mb-4"
                      />
                    </a>
                    <span className="flex gap-4 text-sm p-1">
                      <p className="font-bold text-black hover:underline text-[12px]">
                        Request Contact
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
}

export default Phones;
