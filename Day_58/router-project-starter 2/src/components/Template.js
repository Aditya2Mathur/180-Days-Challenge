import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";
import "./LoginFrom.css"

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {

    console.log("ye rha mera form type");
    console.log(formtype)
    return (
        <div className='customCss flex justify-between w-11/12 max-w-[1160px]  mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row'>

            <div className='w-11/12 max-w-[450px] mx-auto md:mx-0'>
                <h1 className='text-richblack-100 font-semibold text-[1.875rem] mx-auto leading-[2.375rem]'>{title}</h1>
                <p >
                    <span className='text-[1.125rem] leading-[1.625rem] mt-4 text-richblack-25'>{desc1}</span>
                    <br></br> <span className='text-[1.125rem] leading-[1.625rem] mt-4 text-richblack-500 italic'>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='w-full flex items-center gap-x-2 my-4 '>
                    <div className='flex-1 h-[1px] bg-richblack-800 '></div>
                    <p className='text-richblack-5 font-medium text-[0.875rem] leading-[1.375]'>OR</p>
                    <div className='flex-1 h-[1px] bg-richblack-800 '></div>
                </div>

                <button className='w-full justify-center gap-1 hover:bg-[#1f353c] hover:text-[#ffffff]  py-[12px] flex rounded-[8px] px-[12px] mt-6 font-medium text-black border-slate-800 border'>
                    <FcGoogle className=' w-[22px] h-[22px]' />
                    <p> Sign Up with Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px] ">
                <img src={frameImage}
                    className=' absolute left-0'
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy" />

                <img src={image}
                    className=' absolute right-5 top-5'
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy" />
            </div>

        </div>
    )
}

export default Template
