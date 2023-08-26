import React from "react";
import { useState } from "react";
import Card from "./Card";
import { FaBackward, FaForward } from 'react-icons/fa6';


const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftSideHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    function rightSideHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }
    return (
        <div className="w-[400px] h-[500px  ] bg-slate-700 rounded-lg mt-10 p-10  bg-fixed">
            <Card reviews={reviews[index]}></Card>
            <div className=" flex justify-center items-center text-[#0f172a] mt-7 gap-4">
                <button > <FaBackward onClick={leftSideHandler}/> </button>
                <button onClick={rightSideHandler}> <FaForward />  </button>

            </div>
            <div className=" flex justify-center items-center text-[#0f172a] mt-7 gap-4 font-bold">
                <button class="bg-[#0F172A] hover:bg-[#718bc8] hover:text-slate-950 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Rendom</button>
            </div>
        </div>
    )
}

export default Testimonial;