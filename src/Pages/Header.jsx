import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaEnvelope, FaBars } from "react-icons/fa"; // added icons
import xooth_logo from "../Asset/xooth_logo.png";

const statesInNigeria = [
  "All Nigeria", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi",
  "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default function Header() {
  const [selectedState, setSelectedState] = useState("All Nigeria");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[rgb(2,2,39)] shadow-md border-b sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={xooth_logo} alt="Xooth Logo" className="w-12 h-12 object-contain" />
        </Link>

        {/* Search Form */}
        <form className="flex-1 mx-4 hidden md:flex items-center border rounded-md overflow-hidden shadow-sm bg-white">
          {/* State Select */}
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-[rgb(2,2,39)] border-r px-2 py-2 text-sm focus:outline-none"
          >
            {statesInNigeria.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search in xooth..."
            className="flex-1 px-4 py-2 focus:outline-none text-sm"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 text-sm"
          >
            Search
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="relative p-2 rounded hover:bg-blue-800">
            <FaBell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">3</span>
          </button>

          {/* Message Icon */}
          <button className="relative p-2 rounded hover:bg-blue-800">
            <FaEnvelope className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs px-1 rounded-full">5</span>
          </button>

          {/* Menu Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-800"
            >
              <FaBars className="w-5 h-5" />
              {/* <span className="font-medium">Menu</span> */}
            </button>

            {isDropdownOpen && (
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute right-0 mt-2 w-48 bg-white text-black border rounded-md shadow-lg z-50"
              >
                <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  My Profile
                </Link>
                <Link to="/feedback" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Feedback
                </Link>
                <Link to="/performance" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Performance
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 py-2 md:hidden">
        <form className="flex items-center border rounded-md overflow-hidden shadow-sm bg-white">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-gray-100 border-r px-2 py-2 text-xs focus:outline-none"
          >
            {statesInNigeria.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search in xooth..."
            className="flex-1 px-2 py-2 focus:outline-none text-xs"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-3 py-2 hover:bg-green-700 text-xs"
          >
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}
