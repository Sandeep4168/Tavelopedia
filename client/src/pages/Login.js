import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import bgImg from "../images/bgImg.jpg"
import beachVid from "../images/beachVid.mp4"
import Tooltip from "@material-ui/core/Tooltip";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";


const initialState = {
  email:"",
  password:""
}




const Login = () => {
  
  const [formValue,setFormValue] = useState(initialState)
  const {email, password} = formValue
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  
  return (
    
    <div className='w-full h-screen relative'>
    {/* <img src={bgImg} alt="/" className="w-full h-full object-cover" /> */}
    <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>

    <div className="absolute w-full h-full top-0 left-0 bg-gray-700/30"></div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
      <div className="w-full flex  items-center" >
      
      <MDBValidation onSubmit={handleSubmit} noValidate className="w-full flex  items-center ">
      <form className="max-w-[1024px] text-left mx-auto justify-between items-center" action='submit'>
            <div className="flex flex-col my-2">
                <label  > Username</label>
                <input label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email" className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none border  rounded-md p-2"  /> 
                <p className='text-white text-md font-bold'>{formErrors.email}</p>
                
            </div>
          
            <div className="flex flex-col my-2">
                <label onChange={onInputChange} htmlFor="">Password</label>
                <input label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your password" className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none border  rounded-md p-2"  />
                <p className='text-white text-md font-bold'>{formErrors.password}</p>
            </div>
            <button onClick={handleSubmit} className="w-[300px] sm:w-[400px] font-[Poppins]  border bg-transparent hover:bg-white hover:scale-105 duration-300 rounded-md p-2 my-2">Login</button>
            <Link to="/register" className="text-center"> <p className="text-white text-xl  "> Don't have an account? Sign up</p></Link>
        </form>
        </MDBValidation>

      </div>
           
            
    
    </div>
    
</div>
  )
}

export default Login