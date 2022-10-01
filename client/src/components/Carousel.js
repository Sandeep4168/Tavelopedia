import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import img1 from "../images/bg1.jpg"
import img2 from "../images/bg2.jpg"
import img3 from "../images/bg3.jpg"
import img4 from "../images/bg4.jpg"
import img5 from "../images/bg5.jpg"
import img6 from "../images/bg6.jpg"
const sliderData = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img5,
  },
  {
    url: img6,
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className=' h-[400px] w-full relative flex justify-center itmes-center'>
      
        
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100 w-full ' : 'opacity-0 '}>
          {index === slide && (
            <img className='w-full h-full object-cover' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;