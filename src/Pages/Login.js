import { useState } from 'react';
import xooth_logo from "../Asset/xooth_logo.png";
import "../css/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'

function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleValidation = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const data = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post("https://xooth-backend.onrender.com/api/login", data);
            const userData = response.data;
            setLoading(false);

           const { token, userId, profileId } = userData;

           localStorage.setItem('token', token);
           localStorage.setItem('userId', userId);
           localStorage.setItem('profileId', profileId);

            navigate("/dashboards");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
              });
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-lg">Loading...</div>
                </div>  
            ) : (
                <form onSubmit={handleValidation} className='ml-[15vw] mt-[10vh] w-[75%] xl:w-[37.5vw] xl:ml-[28vw] lg:h-[78vh] h-[74vh] bg-[#ffff] shadow-lg'>
                    <div className=''>
                        <img src={xooth_logo} alt="" className="w-[5rem] xl:ml-[13rem] ml-[6rem] md:ml-[8rem] lg:ml-[15rem]" />
                    </div>
                
                    <div className='gap-4'>
                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Email Address:</label>
                        <br />
                        <input 
                            type="email"
                            id="email"
                            onChange={onChangeEmail}
                            placeholder='Email'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 shadow-md border-1 h-[5vh] outline-0 pl-2'
                            required
                        />
                        
                        <label className='font-semibold text-sm pl-3 xl:pl-6 -pt-10'>Password:</label>
                        <br />
                        <input 
                            type="password"
                            id="password"
                            onChange={onChangePassword}
                            placeholder='Password'
                            className='xl:w-[35vw] w-[90%] xl:ml-6 ml-3 bg-slate-100 shadow-md border-1 h-[5vh] outline-0 pl-2'
                            required
                        />
                        <p className='text-left pl-6 text-[10px] pt-3 text-slate-500'>Password must contain a minimum of 8 characters, letters, numbers, and symbols</p>
                    </div>

                    <div className='flex space-x-16 xl:space-x-64 lg:space-x-80 md:space-x-72 pl-5 pt-5 md:ml-[45px] xl:ml-[25px]'>
                        <span className='flex gap-2'>
        
                            <a href="/signup" className='text-[11px] text-green-500'>Sign up</a>
                        </span>

                        <a href="/forgot-password" className='text-[11px] text-green-500'>
                            Forgot Password?
                        </a>
                    </div>

                    <div className='mt-2 ml-[2rem] md:ml-[5rem] xl:ml-[50px]'> 
                        <button type="submit" className='w-[90%] h-[2rem] bg-green-500 rounded-sm text-[#ffff]  text-sm mt-2'>Log in</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Login;
