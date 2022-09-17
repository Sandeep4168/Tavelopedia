import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav)
  return (
    <div  className="w-screen h-[80px] fixed z-10 opacity-100 ">
      <div className="px-2 flex justify-between items-center w-full h-full ">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white font-OpenSans m-4 px-8 sm:text-3xl"> Travelopedia.</h1>
        
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none  bg-transparent hover:scale-110  text-white mr-4 font-OpenSans">
            
            Sign In
          </button>
          <button className="px-8 rounded-full bg-white text-black hover:text-white   py-3 font-OpenSans border-none"> Sign up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;