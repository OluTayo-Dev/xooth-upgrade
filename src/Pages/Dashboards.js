import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import profile_pic from '../Asset/profile_pic.jpg';
import '../css/Dashboard.css';

function Dashboard() {
    const [profile, setProfile] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activityStats, setActivityStats] = useState({ posts: 0, dates: 0, followers: 0 });

    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            if (!token || !userId) throw new Error('No token or userId found');

            const config = {
                headers: { 'Authorization': `Bearer ${token}` }
            };

            const res = await axios.get(`https://xooth-backend.onrender.com/api/getUserById/${userId}`, config);
            if (res.data) setProfile(res.data);

            // Fetch user activity stats
            const statsRes = await axios.get(`https://xooth-backend.onrender.com/api/userStats/${userId}`, config);
            if (statsRes.data) setActivityStats(statsRes.data);
        } catch (err) {
            console.error('Error fetching profile or stats:', err);
          
        }
    };

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.post('https://xooth-backend.onrender.com/api/logout', null, config);
            localStorage.removeItem('token');
            navigate('/login');
            swal.fire({ title: 'Logout', text: 'User logged out successfully', icon: 'success' });
        } catch (error) {
            console.error('Logout failed:', error);
            swal.fire({ title: 'Error', text: 'Failed to log out', icon: 'error' });
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className='flex h-screen bg-gray-100'>
            {/* Sidebar */}
            <div className={`bg-[rgb(2,2,39)] text-white w-64 p-5 space-y-6 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                <div className='text-center'>
                    <img src={profile_pic} alt='profile' className='w-24 h-24 rounded-full mx-auto' />
                    <p className='mt-2 font-semibold'>{profile?.username}</p>
                </div>
                <nav className='flex flex-col space-y-4'>
                    <Link to='/forumInterface'>Forum</Link>
                    <Link to='/dating'>Dating</Link>
                    <Link to='/marketsplace'>Market</Link>
                    <Link to='/chat'>Chat</Link>
                    <Link to='/update-profile'>Update Profile</Link>
                    <Link to='/change-password'>Change Password</Link>
                </nav>
            </div>

            {/* Main content */}
            <div className='flex-1 flex flex-col'>
                {/* Header */}
                <header className='bg-white shadow-md h-16 flex items-center justify-between px-6'>
                    <div className='flex items-center space-x-4'>
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className='text-[rgb(2,2,39)] text-2xl'>
                            <AiOutlineMenu />
                        </button>
                        <h1 className='text-lg font-semibold text-[rgb(2,2,39)]'>Dashboard</h1>
                    </div>

                    <div className='relative'>
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className='flex items-center space-x-2'>
                            <div className='w-8 h-8 bg-[rgb(2,2,39)] rounded-full text-white flex items-center justify-center font-bold'>
                                {profile?.username?.charAt(0).toUpperCase()}
                            </div>
                            <FaChevronDown className='text-[rgb(2,2,39)]' />
                        </button>
                        {dropdownOpen && (
                            <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10'>
                                <button className='w-full px-4 py-2 text-left hover:bg-gray-100' onClick={() => navigate('/update-profile')}>Profile Settings</button>
                                <button className='w-full px-4 py-2 text-left hover:bg-gray-100' onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Dashboard body */}
                <main className='p-6'>
                    <div className='bg-white rounded-lg shadow p-6 mb-6'>
                        <h2 className='text-xl font-bold text-[rgb(2,2,39)] mb-4'>Welcome, {profile
                        ?.username}</h2>
                        <p className='text-gray-600'>Email: {profile?.email}</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-white p-4 rounded-lg shadow'>
                            <h3 className='text-[rgb(2,2,39)] font-bold'>Forum Posts</h3>
                            <p className='text-2xl mt-2'>{activityStats.posts}</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow'>
                            <h3 className='text-[rgb(2,2,39)] font-bold'>Dates Initiated</h3>
                            <p className='text-2xl mt-2'>{activityStats.dates}</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow'>
                            <h3 className='text-[rgb(2,2,39)] font-bold'>Followers</h3>
                            <p className='text-2xl mt-2'>{activityStats.followers}</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
