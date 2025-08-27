import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import xooth_logo from '../Asset/xooth_logo.png';

function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        'https://xooth-backend.onrender.com/api/changePassword',
        inputs,
        config
      );
      console.log(res.data);
      setLoading(false);
      navigate('/login');
      alert('Password changed successfully');
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert('Failed to change password');
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="ml-[15vw] mt-[10vh] w-[75%] xl:w-[37.5vw] xl:ml-[28vw] lg:h-[78vh] h-[74vh] bg-[#ffff] shadow-lg"
        >
          <div>
            <img
              src={xooth_logo}
              alt=""
              className="w-[5rem]  xl:ml-[12rem] ml-[1rem] md:ml-[8rem] lg:ml-[15rem]"
            />
          </div>

          <div className="gap-4">
            <label className="font-semibold text-sm pl-3 xl:pl-6 -pt-10">
              Old Password:
            </label>
            <br />
            <input
              type="password"
              id="old_password"
              value={inputs.old_password}
              onChange={onChangeHandler}
              placeholder="Old Password"
              className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 pl-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0"
              required
            />

            <label className="font-semibold text-sm pl-3 xl:pl-6 -pt-10">
              New Password:
            </label>
            <br />
            <input
              type="password"
              id="new_password"
              value={inputs.new_password}
              onChange={onChangeHandler}
              placeholder="New Password"
              className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 pl-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0"
              required
            />

            <label className="font-semibold text-sm pl-3 xl:pl-6 -pt-10">
              Confirm Password:
            </label>
            <br />
            <input
              type="password"
              id="confirm_password"
              value={inputs.confirm_password}
              onChange={onChangeHandler}
              placeholder="Confirm Password"
              className="xl:w-[35vw] w-[90%] xl:ml-6 ml-3 pl-3 bg-slate-200 shadow-md border-2 border-b-slate-400 outline-0"
              required
            />
            <p className="text-left pl-6 text-[10px] pt-3 text-slate-500">
              Password must contain a minimum of 8 characters, letters, numbers,
              and symbols
            </p>
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="xl:ml-[3.3rem] ml-[15px] w-[14rem] md:w-[30.5rem] lg:w-[39rem] xl:w-[25rem] h-[2rem] bg-green-500 rounded-sm text-[#ffff]  text-sm mt-2"
            >
              CHANGE PASSWORD
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ChangePassword; 