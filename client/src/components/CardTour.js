import React,{useState} from 'react';
import {Link} from "react-router-dom"
const CardTour = ({
    imageFile,
    description,
    title,
    tags,
    _id,
    name,
    likes,
  }) => {

   const [text,setText] = useState(false)

  const  handleText = () => {
    setText(true)
   }
  const  handleRemoveText = () => {
    setText(false)
   }

<<<<<<< HEAD
   const excerpt = (str) => {
    if (str.length >100) {
      str = str.substring(0, 100) + " ...";
    }
    return str;
  };

=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
   




  return (
    <Link to={`/tour/${_id}`}>
      <div onMouseEnter={handleText} onMouseLeave={handleRemoveText} className='relative rounded-xl h-[300px]'>
      <img  className='w-full h-full object-cover rounded-xl' src={imageFile} alt='/' />
      <div className='bg-gray-900/30  duration-500 hover:bg-white hover:opacity-80  absolute top-0 left-0 w-full h-full rounded-xl'>
<<<<<<< HEAD
        <p className={text ?"absolute text-2xl opacity-1 z-10 p-4 ":"absolute text-xl opacity-0 z-10 p-4 "}> {excerpt(description)}</p>
=======
        <p className={text ?"absolute text-2xl opacity-1 z-10 p-4 ":"absolute text-xl opacity-0 z-10 p-4 "}> {description}</p>
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          {title}
        </p>
        
        
      </div>
      
    </div>
    </Link>
    
  );
};

export default CardTour;