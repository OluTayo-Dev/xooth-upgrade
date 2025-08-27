import React from 'react'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import xooth from "../Asset/xooth.png";

export default function Profile() {
    const [file, setFile] = useState();
    ///// TO CREATE PROFILE //////////
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        phone_No: '',
        email: '',
        location: '',
        profession: '',
        relationship_status: '',
        image: '',
        gender: '',
        looking_for: '',
        hobbies: ''
    });

    const onChangeHandler = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
    };

    const submitProfile = async (e) => {
        e.preventDefault();

        try {
            // Retrieve token from localStorage
            const token = localStorage.getItem('token');

            // Include token in the headers
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            // Make API request with token included
            const res = await axios.post("https://xooth-backend.onrender.com/api/createProfile", inputs, config);
            console.log(res.data);
            navigate("/dashboard");
            alert("Profile created successfully");
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div>
         <form onSubmit={submitProfile}  className='ml-[15vw] mt-[10vh] w-[75%] xl:w-[37.5vw] xl:ml-[28vw]  h-fit bg-[#ffff] shadow-lg'>
                
                    <div className='gap-4'>
                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>FirstName:</label>
                        <br />
                        <input 
                            type="text"
                            id="firstname"
                            value={inputs.firstname}
                            onChange={onChangeHandler}
                            placeholder='FirstName'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />
                        
                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>LastName:</label>
                        <br />
                        <input 
                            type="text"
                            id="lastname"
                            value={inputs.lastname}
                            onChange={onChangeHandler}
                            placeholder='LastName'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />
                        
                          <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Phone No:</label>
                        <br />
                        <input 
                            type="number"
                            id="phone_No"
                            value={inputs.phone_No}
                            onChange={onChangeHandler}
                            placeholder='Phone Number'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />
                          <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Email:</label>
                        <br />
                        <input 
                            type="text"
                            id="email"
                            value={inputs.email}
                            onChange={onChangeHandler}
                            placeholder='Email'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />

                          
                         <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Location:</label>
                        <br />
                         <input 
                            type="text"
                            id="location"
                            value={inputs.location}
                            onChange={onChangeHandler}
                            placeholder='Location'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />
                         <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Profession(Area of Specialization):</label>
                        <br />
                         <input 
                            type="text"
                            id="profession"
                            onChange={onChangeHandler}
                            value={inputs.profession}
                            placeholder='Profession'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />

                       <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Hobby(ies):</label>
                        <br />
                         <input 
                            type="text"
                            id="hobbies"
                            value={inputs.hobbies}
                            onChange={onChangeHandler}
                            placeholder='Hobby'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0'
                            required
                        />

                         <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Marital Status:</label>
                        <br />

                        <select id="relationship_status" onChange={onChangeHandler} className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0">
                            <option>select option</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                        </select>

                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Gender:</label>
                        <br />
                        <select id="gender" onChange={onChangeHandler} className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0">
                            <option>select option</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not Say</option>
                        </select>

                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Looking For:</label>
                        <br />

                        <select id="looking_for" onChange={onChangeHandler} className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0">
                            <option>select option</option>
                            <option>Friendship</option>
                            <option>Dating</option>
                            <option>Companion</option>
                            <option>Hook Up</option>
                            <otion>Flirt</otion>
                        </select>
                    </div>

    
                    <div className='mt-2 xl:ml-[3rem]'> 
                        <button type="submit" className='w-[90%]  h-[2rem] bg-green-500 rounded-sm text-[#ffff]  text-sm mt-2'>Create Profile</button>
                    </div>
                </form>
                
    </div>
  )
}
