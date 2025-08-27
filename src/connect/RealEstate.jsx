import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import xooth_logo from "../Asset/xooth_logo.png";
import Modal from "react-modal";
import "../css/Home.css";

function RealEstate() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3500/api/properties')
      .then(res => {
        console.log('Full API Response:', res.data);
        if (res.data && res.data.data && res.data.data.length > 0) {
          setProperties(res.data.data); // Access the `data` array from the response
          console.log('Properties:', res.data.data);
        } else {
          setError('No properties available');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
        setError('Failed to fetch properties');
        setLoading(false);
      });
  }, []);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  }
  
  

  if (loading) {
    return <p className='text-center mt-[20rem]'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center mt-[20rem]'>{error}</p>;
  }

  if (properties.length === 0) {
    return <p className='text-center mt-[20rem]'>No properties are available.</p>;
  }

  return (
    <div className=''>
      <section>
        <header className='bg-white w-full h-[4rem] shadow-lg'>
          <span className='xl:-mt-12'>
            <img src={xooth_logo} alt='' className='w-[15%] xl:w-[5%] m-2 p-2'/>
          </span>
        </header>
      </section>

      <div>

      <div>
            <hr className='w-[95%] mt-5' />

           <div className="flex-container xl:ml-[5rem]">
              <div className="column font-semibold gap-4">
                  <a href="/" className='text-green-600'><li>HOME</li></a>
                  <a href="/forum" className='hover:text-green-600'><li>Forum</li></a>
                  <a href="/politics" className='hover:text-green-600'><li>Politics</li></a>
                  <a href="/entertainment" className='hover:text-green-600'><li>Entertainment</li></a>
            </div>

             <div className="column font-semibold gap-4">
                  <a href="/technology" className='hover:text-green-600'><li>Technology</li></a>
                  <a href="/fashion" className='hover:text-green-600'><li>Fashion</li></a>
                  <a href="/sports" className='hover:text-green-600'><li>Sport</li></a>
                  <a href="/religion" className='hover:text-green-600'><li>Religion</li></a>
             </div>
       </div>

             <hr className='w-[95%]' />
     </div>

        <div className='xl:w-[90%] w-[95%] h-[80vh] xl:ml-[5rem] lg:ml-[2.5rem] md:ml-[2rem] ml-[10px] mt-[3rem] rounded-md'>
        <div className='flex xl:gap-8 gap-0 justify-between'>
                <span>
                    <button type='submit' className='bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800' onClick={openModal}>POST PROPERTY</button>
                </span>
                <span>
                  <Link to="/properties">
                       <button type="submit"  className="bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800"
                  >VIEW PROPERTIES </button></Link>
               </span>
            </div>
          <section className='xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] mt-3'>
            <div className="w-[100%] lg:w-[100%] md:w-[100%] h-screen border border-slate-200 rounded-sm">
            {properties.map(property => (
        <div key={property._id} className="mb-1 bg-gray-200 hover:bg-slate-300">
         <div className="flex">
          <p className="text-sm pl-4 pt-3 text-[#000000bb] font-bold">
           {property.property || 'Unnamed Item'} -
          </p>
      <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
        {property.propertyType || 'Unknown Type'}
      </p>
      <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
        {property.propertyDescription || 'Unknown Type'}
      </p>
      <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
        #{property.price || 'Unknown Type'}
      </p>
      <p className="text-[11px] pl-4 pt-3 text-[#000000bb] font-semibold">
        {property.location || 'Unknown Type'}
      </p>
    </div>
    <div className="flex">
      <a href={`/forum-news/${property._id}`}>
        <img
          src={property.propertyImage}
          alt={property.propertyDescription}
          className="w-[100px] h-[100px] mb-3"
        />
      </a>
      <span className="flex gap-4 text-sm p-1">
        <p className="font-bold text-black hover:underline text-[12px]">Request Contact</p>
      </span>
    </div>
  </div>
))}

            </div>
          </section>
        </div>
      </div>
      <Modal
           style={{
           overlay:{
            position: "fixed",
            top: "0%",
            left: "0%",
            right:"0%",
            bottom: "0%",
            backgroundColor: "#00000078",
            zIndex: 100,
         },
    }}
            className="absolute top-[100px] mx-4 xl:w-[25vw] lg:w-[95vw]  h-[75vh] rounded-[10px] lg:top-auto md:lg:mt-[13vh] mt-[5vh] left-0 xl:left-[32%] lg:left-[-0%] 
            lg:right-[50%] justify-between right-0  pb-12 overflow-y-auto overflow-auto bg-[#e8e4e4] z-50 outline-none border-0 flex flex-col shadow-[5px_5px_30px_0px #00000040]"
            isOpen={modal}
            shouldCloseOnOverlayclick={true}
            onRequestClose={closeModal}
            ariaHideApp={false}
          >

           <div className="rounded-[30px]"> 
              <form className="form-class xl:w-[80%]  w-[100%] h-[50vh] rounded-none"> 
                 <label>Property Name</label> <br />
                 <input type='text'  placeholder='' />  <br />
                 <label>Property Type</label>  <br />
                 <select>
                 <option>select</option>
                    <option>Land</option>
                    <option>Apartment</option>
                    <option>Furniture</option>
                    <option>Others</option>
                 </select>  <br />
                 <label>Property Description</label>  <br />
                 <input type='text'  placeholder='' />  <br />
                 <label>Property Image</label>  <br />
                 <input type='file' placeholder='' />  <br />
                 <label>Price(#)</label>  <br />
                 <input type='text' placeholder='' />  <br />
                 <label>Location</label>  <br />
                 <input type='text' placeholder='' />  <br />
                 <label>Contact Details</label>  <br />
                 <input type='text' placeholder='' />  <br />
                 <button type='submit' className='font-semibold'>POST PROPERTY</button>
               </form>
           </div>
       </Modal>
    </div>
  );
}

export default RealEstate;
