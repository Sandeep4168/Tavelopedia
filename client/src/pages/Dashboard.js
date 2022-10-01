import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToursByUser } from "../redux/features/tourSlice";
// import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import DashboardCard from "../components/DashboardCard"
import Spinner from "../components/Spinner"


const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if(loading){
    return <Spinner/>
  }

  const excerpt = (str) => {
    if (str.length > 40) {
      str = str.substring(0, 40) + " ...";
    }
    return str;
  };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this tour ?")) {
//       dispatch(deleteTour({ id, toast }));
//     }
//   };
  return (
    <div className="flex flex-col justify-center text-center">
      
      {userTours.length === 0 && (
        <h3>No tour available with the user: {user?.result?.name}</h3>
      )}

       
      <div className="max-w-[1400px] relative pt-20 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {userTours &&
          userTours.map((item) => (
            <DashboardCard className="max-w-[800px] px-2" key={item._id} {...item} />
          ))}
      </div>
    </div>
  )
}

export default Dashboard