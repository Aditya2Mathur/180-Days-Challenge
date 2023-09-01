import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [accoutType, setAccountType] = useState("student")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setshowPasswordConfirm] = useState(false);
    
    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
            
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            alert("YOur data is on Console")
            return;

        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,
            accoutType
        }
        console.log("printing account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


    return (
        <div className='flex flex-col'>
            {/* student-Instructor tab */}
            <div className='flex bg-richblack-800 rounded-full justify-evenly p-1 gap-x-1 my-6 max-x-max scale-95'>
                <button
                    onClick={() => {
                        setAccountType("student")
                    }}
                    className={`${accoutType === "student" ?
                        "bg-richblack-900 text-richblack-5 "
                        :
                        " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-500
                `}>
                    Student
                </button>
                <button
                    className={`${accoutType === "instructor" ?
                        "bg-richblack-900 text-richblack-5 "
                        :
                        " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-500
                `}
                    onClick={() => {
                        setAccountType("instructor")
                    }}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col gap-4 ' >
                {/* first name and lastName */}
                <div className='flex justify-between'>
                    <label>
                        <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>First Name<sup className='text-blue-200 font-bold'>*</sup></p>
                        <input
                            className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 '
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>Last Name<sup className='text-blue-200 font-bold'>*</sup></p>
                        <input
                            className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 '
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
                </div>
                {/* email Add */}
                <label>
                    <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>Email Address<sup>*</sup></p>
                    <input
                        className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 '
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
                </label>

                {/* createPassword and Confirm Password */}
                <div className='flex justify-between'>
                    <label className=' relative'>
                        <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>Create Password<sup className='text-[#ff000081] font-bold'>*</sup></p>
                        <input
                            className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 '
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#a12312' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className=' relative'>
                        <p className=' text-[0.875rem] laeding-[1.375] text-white mb-1 '>Confirm Password<sup>*</sup></p>
                        <input
                            className='p-[12px] bg-richblack-700 w-full rounded-md text-richblack-25 '
                            required
                            type={showPasswordConfirm ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setshowPasswordConfirm((prev) => !prev)}>
                            {showPasswordConfirm ? (<AiOutlineEyeInvisible fontSize={24} fill='#a12312' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-blue-200 hover:bg-[#2C333F] hover:text-[#ffffff] py-[12px] rounded-[8px] px-[12px] mt-6 font-medium text-richblack-900 '>
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default SignupForm
