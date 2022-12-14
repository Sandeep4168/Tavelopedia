import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour } from "../redux/features/tourSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
const CardTour = ({
  imageFile,
  description,
  title,
  tags,
  _id,
  name,
  likes,
}) => {
  const [text, setText] = useState(false);
  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleText = () => {
    setText(true);
  };
  const handleRemoveText = () => {
    setText(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deleteTour({ id, toast }));
    }
  };

  const excerpt = (str) => {
    if (str.length >100) {
      str = str.substring(0, 100) + " ...";
    }
    return str;
  };

  if (loading){
    return <Spinner/>
  }

  return (
    <div>
      <div className="flex flex-col max-w-[400px]">
        <Link to={`/tour/${_id}`}>
          <div
            onMouseEnter={handleText}
            onMouseLeave={handleRemoveText}
            className="relative rounded-xl h-[300px]"
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={imageFile}
              alt="/"
            />
            <div
              className={
                text
                  ? " bg-white opacity-80  duration-500  absolute top-0 left-0 w-full h-full rounded-xl"
                  : " duration-500 bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-xl"
              }
            >
              <p
                className={
                  text
                    ? "absolute text-2xl opacity-1 w-full h-full lg:text-xl  p-4 "
                    : "absolute text-2xl opacity-0 w-full h-full lg:text-xl p-4 "
                }
              >
                {" "}
                {excerpt(description)}
              </p>
              <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                {title}
              </p>
            </div>
          </div>
        </Link>
        <div
          onMouseEnter={handleText}
          onMouseLeave={handleRemoveText}
          className=" flex justify-end  mt-[-44px]  bg-transparent z-10"
        >
          <div className=" flex z-20 px-2">
            <Link to={`/editTour/${_id}`}>
            <div
              className={
                text
                  ? "hover:scale-105 text-indigo-800 flex px-3 cursor-pointer "
                  : "hover:scale-105 text-white flex px-3 cursor-pointer"
              }
            >
              <FaPencilAlt  size={25} />
            </div>
            </Link>
            <Link>
            <div
              className={
                text
                  ? "hover:scale-105 text-red-800 flex cursor-pointer"
                  : "hover:scale-105 text-white flex cursor-pointer"
              }
            >
              <FaRegTrashAlt onClick={() => handleDelete(_id)} size={25} />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
