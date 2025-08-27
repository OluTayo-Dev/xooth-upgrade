import React, { useState, useEffect } from 'react';
import axios from "axios";
import Passport from "../Asset/Passport.png"; // Placeholder image

function Doctors() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get("https://xooth-backend.onrender.com/api/getAllProfile")
            .then((response) => {
                console.log("API Response:", response.data); // Debug: Log the entire response
                if (Array.isArray(response.data)) {
                    setProfiles(response.data);
                    console.log("Profiles set:", response.data); // Debug: Log after setting state
                } else if (response.data && Array.isArray(response.data.data)) {
                    // Handle the case where response.data contains the profiles in a data property
                    setProfiles(response.data.data);
                    console.log("Profiles set from data property:", response.data.data); // Debug: Log after setting state
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching profiles:", error);
            });
    }, []);

    console.log("Current profiles state:", profiles); // Debug: Log the current profiles state

    return (
        <div className='bg-green-200 h-screen'>
            <section>
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 w-[100%]">
                        {profiles.length > 0 ? profiles.map((profile) => (
                            <div key={profile._id} className="items-center xl:lg:p-4 p-2">
                                <div className="xl:lg:p-14 p-4 gap-2 rounded-lg bg-gray-100 shadow-xl w-[100%]">
                                    <img src={profile.image || Passport} alt="Profile" className="w-[90%] xl:ml-[8px] ml-1" />

                                    <span className="flex gap-2 mt-2">
                                        <p className="font-semibold text-[10px] xl:lg:text-[16px]">Name:</p>
                                        <p className='text-[10px] xl:lg:text-[16px]'>{profile.fname} {profile.lname}</p>
                                    </span>
                                    <span className="flex gap-2">
                                        <p className="font-semibold text-[10px] xl:lg:text-[16px]">Profession:</p>
                                        <p className='text-[10px] xl:lg:text-[16px]'>{profile.profession}</p>
                                    </span>
                                    <span className="flex gap-2">
                                        <p className="font-semibold text-[10px] xl:lg:text-[16px]">Location:</p>
                                        <p className='text-[10px] xl:lg:text-[16px]'>{profile.location}</p>
                                    </span>
                                    <span className="flex gap-2">
                                        <p className="font-semibold text-[10px] xl:lg:text-[16px]">Looking For:</p>
                                        <p className='text-[10px] xl:lg:text-[16px]'>{profile.looking_for}</p>
                                    </span>
                                    <span className="flex gap-2">
                                        <p className="font-semibold text-[10px] xl:lg:text-[16px]">Phone No:</p>
                                        <p className='text-[10px] xl:lg:text-[16px]'>{profile.phone_No}</p>
                                    </span>
                                </div>
                            </div>
                        )) : (
                            <p>No profiles available</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Doctors;
