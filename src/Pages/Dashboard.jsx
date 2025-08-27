import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert2";
import "../css/Dashboard.css";
import profile_pic from "../Asset/profile_pic.jpg";

function Dashboard() {
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState([]);
    const [inputs, setInputs] = useState({
        username: '',
        topic: '',
        category: '',
        content: ''
    });


    


    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            if (!token || !userId) {
                throw new Error('No token or userId found');
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const res = await axios.get(`https://xooth-backend.onrender.com/api/getUserById/${userId}`, config);
            if (res.data) {
                setProfile(res.data);
                console.log('Profile data:', res.data); // Debug: Log profile data
            } else {
                console.error("Unexpected response format:", res.data);
            }
        } catch (err) {
            console.error('Error fetching profile:', err);
            swal.fire({
                title: "Error",
                text: "Failed to fetch profile",
                icon: "error",
            });
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);


    const onChangeHandler = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
    };

    const handleThreadSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            swal.fire({
                title: "Error",
                text: "No token found. Please log in again.",
                icon: "error",
            });
            navigate('/login');
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const res = await axios.post("https://xooth-backend.onrender.com/api/createThread", inputs, config);
            console.log('Thread created:', res.data);
            navigate('/forum');
            swal.fire({
                title: "Success",
                text: "Thread created successfully",
                icon: "success",
            });
        } catch (err) {
            console.error('Error creating thread:', err);
            swal.fire({
                title: "Error",
                text: "Failed to create thread",
                icon: "error",
            });
        }
    };

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            await axios.post('https://xooth-backend.onrender.com/api/logout', null, config);
            localStorage.removeItem('token');
            navigate('/login');
            swal.fire({
                title: "Logout",
                text: "User logged out successfully",
                icon: "success",
            });
        } catch (error) {
            console.error('Logout failed:', error);
            swal.fire({
                title: "Error",
                text: "Failed to log out",
                icon: "error",
            });
        }
    };

    let links = [
        { name: "HOME", link: "/" },
        { name: "FORUM", link: "/forum" },
        { name: "CONNECT", link: "/connect" },
        { name: "LOGOUT", link: "/login", onClick: handleLogout },
        { name: "UPDATE PROFILE", link: "/update-profile" },
        { name: "CHANGE PASSWORD", link: "/change-password" },
    ];

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <section>
                <header className='bg-green-600 sticky w-full h-[5.5rem] shadow-lg'>
                    <div className="md:flex items-center justify-between py-4 text-white lg:px-[200px] sticky -mt-[5px] md:lg:-mt-[2rem] w-full z-20">
                        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                            <AiOutlineMenu name={isOpen ? "close" : "menu"} className="text-[#fff]" />
                        </div>
                        <ul
                            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-0 z-[-1] left-0 w-full md:w-auto md:pl-9 bg-green-600  -mt-7 transition-all duration-500 ease-in ${isOpen ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100 mt-[2px] md:lg:-mt-0 text-center`}>
                            {links.map((link) => (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 font-medium md:lg:xl:leading-[4.3rem] sticky">
                                    {link.onClick ? (
                                        <button onClick={link.onClick} className="text-[#fff] text-[12px] sticky">
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link to={link.link} className="text-[#fff] text-[12px] sticky">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
            </section>
             <div className="w-[80%] h-[40vh] bg-[#ffff] shadow-xl border-[1px] border-green-600 xl:ml-[9rem] md:ml-[5rem]  ml-[2rem] mt-9 rounded-lg">
                    <div className='flex-col xl:flex'>
                        
                       <div className="w-32 h-32 rounded-full overflow-hidden m-auto xl:mt-10 mt-[4rem]">
                           <img 
                              src={profile_pic} 
                              className="w-full h-full object-cover cursor-pointer"
                           />
                       </div>


                        <span>

                        </span>
                    </div>
             </div>
              
        <section>
            <div className='w-[80%] xl:lg:w-[80%] xl:lg:h-[35vh] lg:h-[40vh] h-[20vh] bg-gray-100 xl:ml-[9rem] lg:ml-[6.5rem] md:ml-[5rem] mt-[60px]  ml-[2.5rem] shadow-xl'>
                    {profile ? (
                        <div>
                            <div className='font-normal justify-center pl-5 pt-5 gap-4'>
                                <span>
                                    <strong className="font-semibold text-green-700"> {profile.username}</strong>
                                </span>
                                <hr  className='w-[97%] mt-1'/>
                                <span>
                                    <strong className="font-semibold text-green-700"> {profile.email}</strong>
                                </span>
                                <hr  className='w-[97%] mt-1'/>
                            </div>
                         
                        </div>
                    ) : (
                        <p className='font-normal justify-center pl-5 pt-5 gap-4'>Loading profile...</p>
                    )}
                </div>
            </section>

            <section className='h-screen'>
                <form onSubmit={handleThreadSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder='Username'
                            value={inputs.username}
                            id="username"
                            onChange={onChangeHandler}
                            className='xl:lg:w-[25vw] w-[75%] h-[6vh] border-2 border-slate-300 outline-0 ml-[3rem] xl:ml-[50rem] md:ml-[7rem] lg:ml-[8rem] mt-5 pl-3'
                        />
                        <input
                            type="text"
                            id="topic"
                            onChange={onChangeHandler}
                            value={inputs.topic}
                            placeholder='Topic'
                            className='xl:lg:w-[25vw] w-[75%] h-[6vh] border-2 border-slate-300 outline-0 ml-[3rem] xl:ml-[50rem] md:ml-[7rem] lg:ml-[8rem] mt-5 pl-3'
                        />
                        <select
                            id="category"
                            className='xl:lg:w-[25vw] w-[75%] h-[6vh] border-2 border-slate-300 outline-0 ml-[3rem] xl:ml-[50rem] md:ml-[7rem] lg:ml-[8rem] mt-5 pl-3'
                            onChange={onChangeHandler}
                        >
                            <option>select</option>
                            <option>Business</option>
                            <option>Sport</option>
                            <option>Lifestyle</option>
                            <option>Fashion</option>
                            <option>Technology</option>
                            <option>Politics</option>
                            <option>Education</option>
                            <option>Family</option>
                            <option>Entertainment</option>
                            <option>Food</option>
                            <option>Religion</option>
                            <option>Aviation</option>
                            <option>Trending</option>
                        </select>
                        <input
                            type="text"
                            placeholder='Write here...'
                            value={inputs.content}
                            onChange={onChangeHandler}
                            id="content"
                            className='xl:lg:w-[25vw] w-[75%] h-[15vh] border-2 border-slate-300 outline-0 ml-[3rem] xl:ml-[50rem] md:ml-[7rem] lg:ml-[8rem] mt-5 pl-3'
                        />
                    </div>
                    <button type="submit" className='xl:lg:w-[25vw] w-[75%] h-[6vh] rounded-sm shadow-lg bg-[#10a223ee] text-white font-semibold ml-[3rem] xl:ml-[50rem] md:ml-[7rem] lg:ml-[8rem] mt-5 pl-3'>
                        Create Thread
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Dashboard;
