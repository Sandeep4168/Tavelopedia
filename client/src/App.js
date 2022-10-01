import "./App.css";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import PrivateRoute from "./components/PrivateRoute";
=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
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
<<<<<<< HEAD
import NotFound from "./components/NotFound";
=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e

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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
          <Route path="/addtour" element={<PrivateRoute><AddEditTour /></PrivateRoute>} />
          <Route path="/edittour/:id" element={<PrivateRoute><AddEditTour /></PrivateRoute>} />
          <Route path="/tour/:id" element={<SingleTour/>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element ={<NotFound/>}/>
=======
          <Route path="/addtour" element={<AddEditTour />} />
          <Route path="/edittour/:id" element={<AddEditTour />} />
          <Route path="/tour/:id" element={<SingleTour/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
