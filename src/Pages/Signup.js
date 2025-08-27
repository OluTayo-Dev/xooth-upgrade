import React, { useState } from 'react';
import xooth_logo from "../Asset/xooth_logo.png";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const navigate = useNavigate();

    // Handle input changes
    const onChangeHandler = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate password and confirm password match
        if (inputs.password !== inputs.confirm_password) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                text: "Please ensure both password fields are identical.",
            });
            return;
        }
        
        // Regular expression for password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
        
        if (!passwordRegex.test(inputs.password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be 8-12 characters long, include at least one uppercase letter, one number, and one symbol.",
            });
            return;
        }
        
        setLoading(true);

        try {
            // Send user data to backend
            const res = await axios.post("https://xooth-backend.onrender.com/api/register", {
                username: inputs.username,
                email: inputs.email,
                password: inputs.password,
                confirm_password: inputs.confirm_password,
            });

            console.log(res.data);
            setLoading(false);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User registered successfully",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/login");
        } catch (err) {
            setLoading(false);

            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: err.response?.data?.message || "An error occurred during signup.",
            });
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='ml-[15vw] mt-[3vh] w-[70%]  xl:w-[37.5vw] xl:ml-[28vw] lg:h-[100vh] xl:h-[95vh] h-[95vh] bg-[#ffff] shadow-lg'
            >
                <div className=''>
                    <img src={xooth_logo} alt="" className="w-[5rem] xl:ml-[13rem] ml-[1rem] md:ml-[8rem] lg:ml-[15rem]" />
                </div>

                <div className='gap-4'>
                    <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Username:</label>
                    <br />
                    <input
                        type="text"
                        id="username"
                        placeholder='Username'
                        value={inputs.username}
                        onChange={onChangeHandler}
                        className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 text-sm shadow-md border-1 h-[5vh] outline-0 pl-2'
                        required
                    />

                    <label className='font-semibold text-sm pl-3  xl:pl-6 lg:ml-3 -pt-10'>Email:</label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        value={inputs.email}
                        onChange={onChangeHandler}
                        className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 text-sm shadow-md h-[5vh] border-1 outline-0 pl-2'
                        required
                    />

                    <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Password:</label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        value={inputs.password}
                        onChange={onChangeHandler}
                        className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 text-sm shadow-md border-1 h-[5vh] outline-0 pl-2'
                        required
                    />

                    <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Confirm Password:</label>
                    <br />
                    <input
                        type="password"
                        id="confirm_password"
                        placeholder='Confirm Password'
                        value={inputs.confirm_password}
                        onChange={onChangeHandler}
                        className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 text-sm shadow-md border-1 h-[5vh] outline-0 pl-2'
                        required
                    />
                    <p className='pl-6 text-[10px] xl:text-[14px] pt-3 text-slate-500'>
                        Password must contain a minimum of 8 characters, including letters, numbers, and symbols.
                    </p>
                </div>

                <div className='flex space-x-24 xl:space-x-64 text-center lg:space-x-80 md:space-x-72 pl-5 pt-3 md:ml-[10px] xl:ml-[30px]'>
                    <span className='flex gap-2'>
                        <p className='text-[12px]'>Already have an account?</p>
                    </span>
                    <a href="/login" className='text-[12px] text-green-500 underline'>Login</a>
                </div>

                <div className='mt-2 ml-[14px] md:ml-[25px] xl:ml-[50px]'>
                    <button
                        className='w-[90%] h-[2rem] bg-green-500 rounded-sm text-[#ffff] text-sm mt-2'
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
}
