import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        },1000)

        count === 0 && navigate("/login")
        return () => clearInterval(interval)
    },[count,navigate])

  return (
    <div className="h-screen z-10 w-full justify-between flex top-0">
        <h5 className="text-5xl absolute top-[50%]">
            Redirecting you in {count} seconds
        </h5>
        
    </div>
  )
}

export default LoadingToRedirect