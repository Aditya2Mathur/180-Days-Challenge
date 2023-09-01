import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center h-11/12 max-w-[1160px] py-4 mx-auto text-[white]' >

        <Link to="/"> 
            <img className=' hover:scale-105 transition-all duration-200' src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav >
            <ul className='flex gap-3'>
                <li className=''>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richbalck-800 py-[8px] px-[12px] rounded -[8px] border border-richblack-700 hover:bg-[#161D29] transition-all duration-200'>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richbalck-800 py-[8px] px-[12px] rounded -[8px] border border-richblack-700 hover:bg-[#161D29] transition-all duration-500'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button
                    className='bg-richbalck-800 py-[8px] px-[12px] rounded -[8px] border border-richblack-700 hover:bg-[#161D29] transition-all duration-500'
                     onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richbalck-800 py-[8px] px-[12px] rounded -[8px] border border-richblack-700 hover:bg-[#161D29] transition-all duration-500'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
