import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import bgImg from "../images/bgImg.jpg"


const initialState = {
  email:"",
  password:""
}




const Login = () => {
  
  const [formValue,setFormValue] = useState(initialState)
  const {email, password} = formValue
  
  
  return (
    
    <div className="w-screen h-auto  ">
     
       {/* <img className=" w-screen absolute" src={bgImg} alt="/"/>  */}
      
        
    <div className="absolute justify-center bg-white" >
        
<form className=" absolute w-[400px] mx-[400px] my-[200px] font-OpenSans bg-[url('/images/bgImg.jpg')]" >
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="true"/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required=""/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button className="px-8 rounded-full bg-white text-black hover:text-white   py-3 font-OpenSans border-none"> Submit</button>
</form>

         
      
     
</div>
      
      
      
    </div>
  )
}

export default Login