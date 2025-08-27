import React, { useState, useEffect } from 'react';
import { ImPhone } from "react-icons/im";
import axios from 'axios';
import Modal from "react-modal";
import xooth_logo from "../Asset/xooth_logo.png";
import "../css/Home.css";
import "../css/marketplace.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";

function MarketsPlace() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputs, setInputs] = useState({
    username: '',
    category: '',
    description: '',
    image: null, // Image will be stored as a File object
    price: '',
    location: '',
    contact: ''
  });


  const onChangeHandler = (e) => {
    const { id, value, files } = e.target;
    if (id === 'image') {
      // Update the image field with the selected file
      setInputs({ ...inputs, [id]: files[0] });
    } else {
      setInputs({ ...inputs, [id]: value });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the paginated items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const submitItem = async (e) => {
    e.preventDefault();

    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      // Create FormData for the multipart request
      const formData = new FormData();
      formData.append('username', inputs.username);
      formData.append('category', inputs.category);
      formData.append('description', inputs.description);
      formData.append('image', inputs.image); // Append the image file
      formData.append('price', inputs.price);
      formData.append('location', inputs.location);
      formData.append('contact', inputs.contact);

      // Include token in the headers
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' // Set correct content type
        }
      };

      // Make API request with token included
      const res = await axios.post("https://xooth-backend.onrender.com/api/postItem", formData, config);
      console.log(res.data);
      navigate("/marketsplace");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item posted successfully",
        showConfirmButton: false,
        timer: 1500
    });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Please try again?",
        text: "Fail to post item?",
        icon: "question"
    });
    }
  };

  useEffect(() => {
    axios
      .get('https://xooth-backend.onrender.com/api/getItems')
      .then((res) => {
        console.log('Full API Response:', res.data);
        if (res.data && res.data.data && res.data.data.length > 0) {
          setItems(res.data.data);
          console.log('Items:', res.data.data);
        } else {
          setError('No items available');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
        setError('Failed to fetch items');
        setLoading(false);
      });
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };


  if (error) {
    return <p className="text-center mt-[20rem]">{error}</p>;
  }


  const categories = ['Real Estate', 'Electronics', 'Furniture', 'Shoes', 'Phones'];

  return (
    <div className="">
      <section>
        <header className="bg-[rgb(2,2,39)] w-full h-[4rem] shadow-lg">
          <span className="xl:-mt-12">
            <img src={xooth_logo} alt="" className="w-[15%] xl:w-[5%] m-2 p-2" />
          </span>
        </header>
      </section>

      <div>
        
        <div className="xl:w-[90%] w-[95%] h-[80vh] xl:ml-[5rem] lg:ml-[2.5rem] md:ml-[2rem] ml-[10px] mt-[3rem] rounded-md">
          <div className="flex xl:gap-8 gap-0 justify-between">
            <span className="relative">
              <button
                type="button"
                className="bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800"
                onClick={toggleDropdown}
              >
                {selectedCategory ? `Category: ${selectedCategory}` : 'Select Category'}
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48">
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>

            <span>
        
                <button
                  type="submit"
                  className="bg-black text-[#fff] text-sm font-semibold rounded-none p-2 hover:text-green-800" onClick={openModal}
                >
                  POST ITEM
                </button>
        
            </span>
          </div>

             <section className=" xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] mt-3">
                  <div className="w-full h-screen">
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentItems.map((item) => (
                      <div 
                       key={item._id}
                        className="flex flex-col xl:lg:flex-row dating-class p-4 bg-gray-200 hover:bg-slate-300 rounded shadow-sm"
                        >
                        {/* Image */}
                         <div className="image 2xl:w-full w-[90%] ml-3 object-cover">
                           <a href={`/forum-news/${item._id}`}>
                             <img
                              src={item.image}
                               alt={item.description}
                               className="w-full h-32 object-cover"
                               />
                          </a>
                       </div>
                  
                       {/* Bio */}
                    <div className="bio 2xl:w-1/2 w-[100%] ml-[24px] p-0">
                       <p className="text-sm text-gray-800 font-semibold">
                         <span className="text-green-600 font-bold">Username:</span>{" "}
                            {item.username || "Unnamed Item"}
                     
                      </p>
                          <p className="text-sm text-gray-800 font-semibold">
                            <span className="text-green-600 font-bold">Category:</span>{" "}
                              {item.category || "Unknown Type"}
                          </p>
         
                          <p className="text-sm text-gray-800 font-semibold">
                           <span className="text-green-600 font-bold">About:</span>{" "}
                            {item.description || "Unknown Description"}
                         </p>
         
                         <p className="text-sm text-gray-800 font-semibold">
                          <span className="text-green-600 font-bold">Price:</span>{" "}
                                 #{item.price || "Unknown Gender"}
                        </p>
         
                         <p className="text-sm text-gray-800 font-semibold">
                           <span className="text-green-600 font-bold">Location:</span>{" "}
                            {item.location || "Unknown Location"}
                         </p>
         
                       </div>
         
                  
                        {/* Details */}
                        <div className="details-class ml-[4rem] 2xl:xl:lg:ml-0">
                          <a href="">
                             <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded">
                               <ImPhone className="icon" />
                                  View Contact
                           </button>
                         </a>
                       </div>
                    </div>
                    ))}
                   </div>
         
                  
                    {/* Pagination */}
                 <div className="pagination mt-4 flex justify-center space-x-2">
                   {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                       onClick={() => handlePageChange(index + 1)}
                       className={`px-4 py-2 rounded ${
                       currentPage === index + 1
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                        }`}
                       >
                       {index + 1}
                    </button>
                     ))}
                     </div>
                      </div>
           </section>
        </div>
      </div>

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: "-8%",
            left: "0%",
            right: "0%",
            bottom: "0%",
            backgroundColor: "#00000078",
            zIndex: 100,
          },
        }}
        className="absolute top-[100px] mx-4 xl:w-[25vw] lg:w-[95vw] h-[75vh] rounded-[10px] lg:top-auto md:lg:mt-[13vh] mt-[5vh] left-0 xl:left-[32%] lg:left-[-0%] lg:right-[50%] justify-between right-0 pb-12 overflow-y-auto overflow-auto
         bg-[#e8e4e4] z-50 outline-none border-0 flex flex-col shadow-[5px_5px_30px_0px #00000040]"
        isOpen={modal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="rounded-[30px]">
          <form onSubmit={submitItem} className="form-class xl:w-[80%] w-[100%] h-[50vh] rounded-none">
            <label>Username</label> <br />
            <input type="text"
             placeholder="" 
             id="username"
             onChange={onChangeHandler}
             value={inputs.username}
             /> <br />
            <label>Category</label> <br />

            <select id="category" onChange={onChangeHandler}>
            <option>select</option>
              <option>{selectedCategory || 'Select'}</option>
              <option>electronics</option>
              <option>land</option>
              <option>apartments</option>
              <option>rent</option>
              <option>phones</option>
              <option>gadgets</option>
              <option>furnitures</option>
              <option>others</option>
            </select> <br />

            <label>Item Description</label> <br />
            <input type="text"
             placeholder="" 
             id="description"
             value={inputs.description}
             onChange={onChangeHandler}
             /> <br />

            <label>Item Image</label> <br />
            <input 
            type="file"
            id="image"
            accept="image/*"
            onChange={onChangeHandler} />
             <br />

            <label>Price(#)</label> <br />
            <input type="text" 
            placeholder="" 
            id='price'
            value={inputs.price}
            onChange={onChangeHandler}
            /> 
            <br />

            <label>Location</label> <br />
            <input type="text"
             placeholder=""
             id="location"
             value={inputs.value}
             onChange={onChangeHandler}
              />
              <br />

            <label>Contact Details</label> <br />
            <input type="text" 
            placeholder="" 
            id='contact'
            value={inputs.contact}
             onChange={onChangeHandler}
            /> 
            <br />

            <button type="submit" className="font-semibold">
              POST ITEM
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default MarketsPlace;
