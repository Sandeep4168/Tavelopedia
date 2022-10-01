import React from 'react'
import bgImage from "../images/bg9.jpg" 

const NotFound = () => {
  return (
    <div className="fixed flex w-screen h-screen text-center items-center">
        <img className='object-cover flex h-screen w-screen' src={bgImage} alt="" />
        <div className="absolute top-[50%] w-full text-center ">
        <h1 className='text-5xl font-extrabold text-white'> 404 </h1>
        <h2 className='text-4xl font-bold text-white'> Page Not Found</h2>

        </div>
        
    </div>
  )
}

export default NotFound