import React from "react"
import "./App.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import {useEffect} from "react"
import {setUser} from "./redux/features/authSlice"
import AddEditTour from "./pages/AddEditTour";
import SingleTour from "./pages/SingleTour";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
const AnotherComponent = React.lazy(() => import('./pages/Home'));


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"))
  


  useEffect(() => {
    dispatch(setUser(user))
  },[])  


  return (
    
    <div>
      
      <BrowserRouter>
      <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AnotherComponent />} />
          <Route path="/tours/search" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtour" element={<PrivateRoute><AddEditTour /></PrivateRoute>} />
          <Route path="/edittour/:id" element={<PrivateRoute><AddEditTour /></PrivateRoute>} />
          <Route path="/tour/:id" element={<SingleTour/>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element ={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
