import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import "./LoginFrom.css"

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })


    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        alert("YOur data is on Console")
    }

  return (
    <form onSubmit={submitHandler}  className='mt-5 flex flex-col gap-5'>
        <label>
            <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>
                Email Address<sup className='text-blue-200 font-bold'>*</sup>
            </p>
            <input
                className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 ' 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
            />
        </label>

        <label className='relative'>
            <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>
                Password<sup className='text-blue-200 font-bold'>*</sup>
            </p>
            <input
                className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 ' 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            /> 

            <span className=' absolute right-3 top-[38px] cursor-pointer'
                 onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#a12312'/>) 
                : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p class="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='w-full bg-blue-200 py-[12px] rounded-[8px] px-[12px] mt-6 font-medium text-richblack-900  '>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
