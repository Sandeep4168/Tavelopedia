import React, { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToursBySearch } from "../redux/api";
import { getTours, searchTours } from "../redux/features/tourSlice";
import decode from "jwt-decode"

const Navbar = () => {
  const [logo, setLogo] = useState(false);
  const [nav, setNav] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const token =  user?.token
  const [search,setSearch] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  if(token){
    const decodedToken = decode(token)
    if(decodedToken.exp *1000 < new Date().getTime()){
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTours(search));
      navigate(`/tours/search?searchQuery=${search}`);
      setSearch("");
    } else {
      dispatch(getTours());
      navigate("/");
    }
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
            <form action="" class="relative mx-auto w-max px-3" onSubmit={handleSubmit}  >
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                class="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-transparent stroke-white-500 px-3.5 peer-focus:border-white  peer-focus:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>

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
                ? "absolute text-black z-30 left-0 top-0 w-full bg-gray-100/90 px-4 py-7"
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
    </div>
  );
};

export default Navbar;
