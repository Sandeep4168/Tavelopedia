<<<<<<< HEAD
import React, { useState } from "react";
=======
import React,{useState} from "react";
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
import { BsPerson, BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
<<<<<<< HEAD
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
=======
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from "react-icons/fa"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
import { setLogout } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
const Navbar = () => {
  const [logo, setLogo] = useState(false);
  const [nav, setNav] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center h-20 w-full fixed z-10 text-white bg-gradient-to-b from-gray-800">
      <div className="mx-4">
        <Link to="/">
          <h1 className={logo ? "hidden" : "block"}> Travelopedia.</h1>
        </Link>
      </div>

      {user?.result?._id && (
        <ul className="hidden md:flex">
          <li>
            <Link to="/dashboard"> Dashboard </Link>
          </li>
          <li>
            <Link to="/addtour"> Add Tour </Link>
          </li>
          <li> View </li>
          <li> Book </li>
        </ul>
      )}

      {user?.result?._id && (
        <>
          <div className="hidden md:flex mr-3">
            <BiSearch className="mr-3 mt-2" size={25} />

            <div>
              <button
                onClick={() => handleLogout()}
                className="transform hover:scale-110 duration-300  px-5 py-1 "
                
              >
                {" "}
                Log out
              </button>
            </div>
          </div>

          <div onClick={handleNav} className="md:hidden z-10">
            {nav ? (
              <AiOutlineClose className="text-black" />
            ) : (
              <HiOutlineMenuAlt4 size={20} />
            )}
          </div>
        </>
      )}

      {user?.result?._id && (
        <>
          {/* Mobile menu dropdown */}
          <div
            onClick={handleNav}
            className={
              nav
                ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7"
                : "absolute left-[-100%]"
            }
          >
            <ul>
              <h1 className="mx-4"> Travelopedia.</h1>
              <li>
                <Link to="/dashboard"> Dashboard </Link>
              </li>
              <li>
                <Link to="/addtour"> Add Tour </Link>
              </li>

              <li className="border-b"> View </li>
              <li className="border-b"> Book </li>

              <div className="flex flex-col">
                <button className="my-6"> Search </button>
                <button> Account </button>
              </div>
              <div className="flex justify-between my-6 ">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
                <FaPinterest className="icon" />
                <FaInstagram className="icon" />
              </div>
            </ul>
          </div>
        </>
      )}
=======

const Navbar = () => {
    const [logo,setLogo] = useState(false)
    const [nav,setNav] = useState(false)
    const {user} = useSelector((state) => ({...state.auth}))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    const handleLogout = () => {
      dispatch(setLogout());
      navigate("/login")
    };
  return (
    <div className="flex justify-between items-center h-20 w-full fixed z-10 text-white bg-gradient-to-b from-gray-800">
      
      <div className="mx-4">
        <Link to="/"><h1 className={logo? "hidden":'block'}> Travelopedia.</h1></Link>
        
      </div>

      {user?.result?._id && (<ul className="hidden md:flex">
        
        <li><Link to ="/addtour"> Add Tour </Link></li>
        
        <li> Travel </li>
        <li> View </li>
        <li> Book </li>
      </ul>)}

      {user?.result?._id && (<>
        <div className="hidden md:flex mr-3">
          <BiSearch className="mr-3 mt-2" size={25}/>
          
          <div>
          <button onClick={() => handleLogout()} className="transform hover:scale-110 duration-300  px-4 py-1 bg-transparent"> Log out</button>
        </div>
        </div>
  
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? <AiOutlineClose className="text-black"/> : <HiOutlineMenuAlt4 size={20}/>}
          
        </div>

        
      </>)}

      

      {user?.result?._id && (
        <>
        
         
         {/* Mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7" : "absolute left-[-100%]" }>
        <ul >
          <h1 className="mx-4"> Travelopedia.</h1>
          <li className="border-b"> Home </li>
          <li className="border-b"> Destinations </li>
          <li className="border-b"> Travel </li>
          <li className="border-b"> View </li>
          <li className="border-b"> Book </li>
  
          <div className="flex flex-col">
              <button className="my-6"> Search </button>
              <button> Account </button>
          </div>
          <div className="flex justify-between my-6 "> 
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
          </div>
  
        </ul>
  
        </div>
        </>

      )}

      

      
      

>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
    </div>
  );
};

export default Navbar;
