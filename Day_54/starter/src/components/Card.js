import React from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
const Card = (props) => {
    let reviews = props.reviews;
    return (

        <div className="flex flex-col  md:relative">
            <div className=" absolute top-[-4.5rem] left-[-10] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[100px] h-[100px] z-[30] box-shadow: 0 10px 15px -3px rgb(4ab 36c aaa),  4px 6px -4px rgb(1ab 2ab 3ab)" src={reviews.image} />
                <div className="rounded-full w-[100px] h-[100px] z-[-10] absolute top-[-6px] left-[10px]  bg-[#718bc8]"></div>
            </div>
            <div className="text-center ">
                <p className=" font-bold text-stone-100">{reviews.name}</p>
                <p className="text-stone-100">{reviews.job}</p>
            </div>
            <div className=" flex flex-col justify-center items-center  mt-7 gap-4">
                <div className="text-[#0F172A]"><FaQuoteLeft /> </div>
                <div className="h-[100px] text"><p className="text-slate-50 text-[13px] ">{reviews.text}</p></div>
                <div className="text-[#0F172A]"><FaQuoteRight /> </div>
            </div>

        </div>

    )
}
export default Card;