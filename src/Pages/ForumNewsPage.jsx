import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

export default function ThreadDetail() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Function to fetch user data from the token
  const fetchCurrentUser = () => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (!token) {
      console.error('No token found');
      return;
    }

    axios.get('http://localhost:3500/api/getCurrentUser', {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in headers
      },
    })
      .then(res => {
        setCurrentUser(res.data.username); // Assuming the backend sends username in the response
      })
      .catch(err => {
        console.error('Error fetching current user:', err);
      });
  };

  useEffect(() => {
    // Fetch the current logged-in user when the component mounts
    fetchCurrentUser();

    // Fetch the thread by ID
    axios.get(`https://xooth-backend.onrender.com/api/getThreadById/${id}`)
      .then(res => {
        setThread(res.data.data); // Assuming the response has a data field containing the thread
        setReplies(res.data.data.replies || []); // Assuming replies are part of the thread data
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching thread:', err);
        setError('Failed to fetch thread');
        setLoading(false);
      });
  }, [id]);

  const handleReplySubmit = (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!currentUser) {
      alert('You must be logged in to reply');
      return;
    }

    // Create a new reply object
    const newReplyObject = {
      username: currentUser, // Use the username of the current logged-in user
      content: newReply,
    };

    // Post the new reply to the backend
    axios.post(`http://localhost:3500/api/addReplyToThread/${id}`, newReplyObject)
      .then(res => {
        // Add the new reply to the replies array
        setReplies([...replies, res.data.thread.replies[res.data.thread.replies.length - 1]]);
        setNewReply(''); // Clear the input after submitting
      })
      .catch(err => {
        console.error('Error posting reply:', err);
      });
  };

  if (loading) {
    return <p className='text-center mt-[20rem]'>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <span className=''>
         <Link to="/forum" className='text-3xl text-green-800'><IoArrowBack  className='xl:ml-[5rem] ml-[2rem]'/></Link>
      </span>
      <section className='w-[90%] h-fit rounded-t-lg bg-slate-200 shadow-lg mx-auto mt-[4rem]'>
        <span className="flex gap-4 absolute bg-green-800 w-[90%] shadow-lg text-white font-semibold text-sm rounded-t-lg p-2">
          <h1>{thread.topic}</h1>
          <p>Posted by: {thread.username}</p>  
          <p>{thread.time}</p>
        </span>
        <p className="pt-[4rem] pl-2">{thread.content}</p>
      </section>

      <div className='flex gap-4 justify-center'>
        <p className="justify-center underline cursor-pointer">(Like</p>
        <p>||</p>
        <a href="#reply" className="justify-center underline">Reply)</a>
      </div>

      <div className='w-[90%] mx-auto mt-4'>
        <h2 className='text-xl font-bold'>Replies</h2>
        {replies.map((reply, index) => (
          <div key={index} className='bg-white shadow-md p-2 mt-2'>
            <p className='font-semibold'>{reply.username} <span className='text-gray-500 text-sm'>{reply.time}</span></p>
            <p>{reply.content}</p>
          </div>
        ))}

        <form onSubmit={handleReplySubmit} className='mt-4'>
          <textarea
            className='w-full p-2 border rounded'
            rows='4'
            placeholder='Write your reply...'
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <button type='submit' className='bg-green-800 text-white px-4 py-2 rounded mt-2'>Submit Reply</button>
        </form>
      </div>
    </div>
  );
}
