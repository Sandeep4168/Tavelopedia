import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { getTour } from "../redux/features/tourSlice";


const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => ({ ...state.tour }));
  const { id } = useParams();
  const navigate = useNavigate();
  const tags = tour?.tags;

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);





  return (
    <div>
        <div className="h-[300px] w-full flex flex-col top-0 justify-center relative">
        <img src={tour.imageFile} alt="/" className="w-full h-[300px] object-cover"/>
        <h1 className="text-8xl w-full text-center font-thin absolute z-10 text-white"> {tour.title}</h1>
        </div>
        <div>
            <div className="flex justify-bewteen text-2xl relative p-4">
                <p>{tour.description}</p>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default SingleTour