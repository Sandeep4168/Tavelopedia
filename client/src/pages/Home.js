import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours, setCurrentPage } from "../redux/features/tourSlice";
import CardTour from "../components/CardTour";
<<<<<<< HEAD
import Spinner from "../components/Spinner";
=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
import Carousel from "../components/Carousel";

import { useLocation } from "react-router-dom";

const Home = () => {
  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(getTours());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

<<<<<<< HEAD
  if (loading){
    return <Spinner/>
  }

=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="h-[400px] w-full">
      <Carousel className="h-[400px]"/>
      </div>

        <div>
          <h1 className="text-2xl my-4 py-2 font-extrabold"> Exclusive Destinations</h1>
          <h2 className="text-4xl font-thin"> One Place, Many Worlds</h2>
        </div>
      
      <div className="max-w-[1400px] relative pt-20 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours &&
          tours.map((item) => (
            <CardTour className="max-w-[400px] px-2" key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
