import "./App.css";
import Navbar from "./components/Navbar";
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
          <Route path="/addtour" element={<AddEditTour />} />
          <Route path="/edittour/:id" element={<AddEditTour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
