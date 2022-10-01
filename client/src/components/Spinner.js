import React from 'react'
import {BeatLoader} from "react-spinners"

const spinner = () => {
  return (
    <div className="fixed w-screen h-screen bg-blend-overlay bg-slate-500/80 opacity-50 z-30 flex justify-between items-center ">
      <div className='flex flex-col w-full  items-center'>
          <BeatLoader size = {20} color="blue" />
      </div>
        
    </div>
  )
}

export default spinner