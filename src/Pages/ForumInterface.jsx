import React, { useState } from "react";
import Footer from "./footer";
import {Link} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function DualForm() {
  const [topic, setTopic] = useState("");
  const [post, setPost] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [postError, setPostError] = useState("");
  const [searchError, setSearchError] = useState("");

  const ForumPages = [
  { name: "Sports", img: "https://imgur.com/z60xbES.png" },
  { name: "Politics", img: "https://imgur.com/fBSYvq5.png" },
  { name: "Entertainment", img: "https://imgur.com/n1aPIWK.png" },
  { name: "Business", img: "https://imgur.com/ANEZwNb.png" },
  { name: "Fashion", img: "https://imgur.com/ArQ8nyp.png" },
  { name: "Properties", img: "https://imgur.com/ErNL0iz.png" },
  { name: "Technology", img: "https://imgur.com/mzAiPdT.png" },
  { name: "Education", img: "https://imgur.com/bBU4ZK4.png" },
];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!topic || !post) {
      setPostError("Please select a topic and write something.");
    } else {
      setPostError("");
      console.log("Topic:", topic);
      console.log("Post:", post);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchError("Please enter a search query.");
    } else {
      setSearchError("");
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    
      <div>
        <div className="rounded-b-xl bg-[rgb(2,2,39)] text-white px-4 py-8">
      {/* Header */}
        <div>
            <Link to="/"><FaArrowLeftLong /></Link>
            <h3 className="text-center text-2xl md:text-3xl font-semibold mb-6">
                 Join the Conversation on Xooth Forum
           </h3>
        </div>

      {/* Sticky Form Container */}
      <div className="sticky top-0 z-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* 📝 Post Form */}
          <form
            onSubmit={handlePostSubmit}
            className="flex flex-col md:flex-row gap-2 flex-1"
          >
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-[rgb(10,10,60)] border border-gray-500 rounded px-3 py-2 text-sm text-white"
            >
              <option value="">Select topic</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
            </select>

            <input
              type="text"
              placeholder="Write your post..."
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="flex-1 bg-[rgb(10,10,60)] border border-gray-500 rounded px-3 py-2 text-sm text-white placeholder-gray-400"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Post
            </button>
          </form>
          {postError && (
            <p className="text-red-400 text-sm mt-1 ml-2">{postError}</p>
          )}

          {/* 🔍 Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex flex-1 gap-2 items-start md:items-center"
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-[rgb(10,10,60)] border border-gray-500 rounded px-3 py-2 text-sm text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
            >
              Search
            </button>
          </form>
          {searchError && (
            <p className="text-red-400 text-sm mt-1 ml-2">{searchError}</p>
          )}
        </div>
      </div>
     </div>
  

   
    
    </div>
    
  );
}

export default DualForm;
