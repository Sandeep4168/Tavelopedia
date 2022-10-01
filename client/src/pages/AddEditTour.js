import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "../images/bgImg.jpg";
import { createTour, updateTour } from "../redux/features/tourSlice";
<<<<<<< HEAD
import Spinner from "../components/Spinner"
=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e

const initialState = {
  title: "",
  description: "",
  tags: [],
};

const AddEditTour = () => {
  const [tourData, setTourData] = useState(initialState);
  const [tagErrMsg, setTagErrMsg] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

<<<<<<< HEAD
  const { error, userTours,loading } = useSelector((state) => ({
=======
  const { error, userTours } = useSelector((state) => ({
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
    ...state.tour,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, description, tags } = tourData;
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(tourData));
    setIsSubmit(true);

    if (!tags.length) {
      setTagErrMsg("Please provide some tags");
    }
    if (title && description && tags) {
<<<<<<< HEAD

      const updatedTourData = { ...tourData, name: user?.result?.name };

      if(!id){
        
        dispatch(createTour({ updatedTourData, navigate, toast }));
      }else{
        dispatch(updateTour({ id,updatedTourData, navigate, toast }));
      }
      
      handleClear();
=======
      const updatedTourData = { ...tourData, name: user?.result?.name };
      dispatch(createTour({ updatedTourData, navigate, toast }));
      // handleClear();
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
    }
  };

  const handleAddTag = (tag) => {
    setTagErrMsg(null);
    setTourData({ ...tourData, tags: [...tourData.tags, tag] });
  };
  const handleDeleteTag = (deleteTag) => {
    setTourData({
      ...tourData,
      tags: tourData.tags.filter((tag) => tag !== deleteTag),
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(tourData);
    }
  }, [formErrors]);

<<<<<<< HEAD
  useEffect(() =>{
    
    if(id){
      const singleTour = userTours.find((tour) => tour._id === id)
      console.log(singleTour)
      setTourData({...singleTour})
    }
    

  },[id])

 

=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

<<<<<<< HEAD
  if (loading){
    return <Spinner/>
  }



=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
  const handleClear = () => {
    setTourData({ title: "", description: "", tags: [] });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.description) {
      errors.description = "description is required!";
    }

    return errors;
  };

  return (
    <div className="w-full h-screen relative">
      <img src={bgImg} alt="/" className="w-full h-full object-cover" />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-700/90"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
<<<<<<< HEAD
        <h1 className="text-4xl font-bold"> {id ? "Update Tour" : "Add a Tour"}</h1>
=======
        <h1 className="text-4xl font-bold"> Add a Tour</h1>
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
        <div className="w-full flex  items-center">
          <MDBValidation
            onSubmit={handleSubmit}
            noValidate
            className="w-full flex  items-center "
          >
            <form
              className="max-w-[1024px] text-left mx-auto justify-between items-center"
              action="submit"
            >
              <div className="flex flex-col my-2">
                <label> Title</label>
                <input
                  label="title"
                  type="text"
                  value={title}
                  name="title"
                  onChange={onInputChange}
                  required
                  invalid
                  className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none border  rounded-md p-2"
                />
                <p className="text-white text-md font-bold">
                  {formErrors.title}
                </p>
              </div>

              <div className="flex flex-col my-2">
                <label onChange={onInputChange} htmlFor="">
                  Description
                </label>
                <textarea
                  label="Description"
                  type="text"
                  value={description}
                  name="description"
                  onChange={onInputChange}
                  required
                  invalid
                  rows={6}
                  className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none border  rounded-md p-2"
                />
                <p className="text-white text-md font-bold">
                  {formErrors.description}
                </p>
              </div>
<<<<<<< HEAD
              <div className="my-2 rounded-md bg-white w-[300px] sm:w-[400px]">
                <ChipInput
                  className="bg-transparency py-2 "
=======
              <div className="my-2 rounded-md bg-white">
                <ChipInput
                  className="bg-transparency py-2"
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
                  name="tags"
                  variant="outlined"
                  placeholder="Enter Tag"
                  fullWidth
                  value={tags}
                  onAdd={(tag) => handleAddTag(tag)}
                  onDelete={(tag) => handleDeleteTag(tag)}
                />
                {tagErrMsg && <div className="tagErrMsg">{tagErrMsg}</div>}
              </div>
              <div className="justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setTourData({ ...tourData, imageFile: base64 })
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-[300px] sm:w-[400px] font-[Poppins]  border bg-transparent hover:bg-white hover:scale-105 duration-300 rounded-md p-2 my-2"
              >
<<<<<<< HEAD
                {id ? "Update" : "Submit"}
              </button>
              <br />
              <button
                onClick={handleClear}
=======
                Submit
              </button>
              <br />
              <button
                onClick={handleSubmit}
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
                className="w-[300px] sm:w-[400px] font-[Poppins]  border bg-transparent hover:bg-white hover:scale-105 duration-300 rounded-md p-2 my-2"
              >
                Clear
              </button>
            </form>
          </MDBValidation>
        </div>
      </div>
    </div>
  );
};

export default AddEditTour;
