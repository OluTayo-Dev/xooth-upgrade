import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[rgb(2,2,39)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Grid - Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold mb-4">XOOTH</h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              XOOTH is your one-stop platform to buy and sell products,
              connect with friends, find jobs, meet people, and hire professionals
              across Nigeria and beyond.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h2 className="text-base font-semibold mb-3 uppercase">Marketplace</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/marketsplace" className="hover:text-white">Browse Items</a></li>
              <li><a href="/post-item" className="hover:text-white">Sell Your Item</a></li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li><a href="/premium" className="hover:text-white">Premium Services</a></li>
            </ul>
          </div>

          {/* Jobs */}
          <div>
            <h2 className="text-base font-semibold mb-3 uppercase">Jobs</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/jobs" className="hover:text-white">Find Jobs</a></li>
              <li><a href="/post-job" className="hover:text-white">Post a Job</a></li>
              <li><a href="/companies" className="hover:text-white">Companies Hiring</a></li>
              <li><a href="/career-tips" className="hover:text-white">Career Tips</a></li>
            </ul>
          </div>

          {/* Dating */}
          <div>
            <h2 className="text-base font-semibold mb-3 uppercase">Dating</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/dating" className="hover:text-white">Meet People</a></li>
              <li><a href="/dating-safety" className="hover:text-white">Dating Safety</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/relationship-tips" className="hover:text-white">Relationship Tips</a></li>
            </ul>
          </div>

          {/* Professionals */}
          <div>
            <h2 className="text-base font-semibold mb-3 uppercase">Hire Professionals</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/professionals" className="hover:text-white">Find Professionals</a></li>
              <li><a href="/post-service" className="hover:text-white">Offer Your Service</a></li>
              <li><a href="/categories/professionals" className="hover:text-white">Service Categories</a></li>
              <li><a href="/tips" className="hover:text-white">Hiring Tips</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          
          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-6 mb-6 text-xl">
            <a href="https://facebook.com/xooth" aria-label="Facebook" className="hover:text-blue-400">
              <CgFacebook />
            </a>
            <a href="https://twitter.com/xooth" aria-label="Twitter" className="hover:text-blue-400">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/xooth" aria-label="Instagram" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} XOOTH. All rights reserved.</p>
            <p className="mt-1">Buy • Sell • Connect • Work • Date • Hire — All in one place.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
