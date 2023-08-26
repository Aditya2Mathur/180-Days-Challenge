import React from "react";
import reviews from "./data"
import Testimonial from "./components/Testimonial";
const App = (props) => {
  
  return(
    
    <div className="flex flex-col w-[100%] h-[100%] bg-slate-900 justify-center items-center">
      <div className="text-center">
        <h1 className="text-[2rem] text-slate-50">Our Profile</h1>
        <div className="w-[150px]  h-[3px] bg-slate-700 place-self-center"></div>
       
      </div>
      <Testimonial reviews={reviews}/>
    </div>

  )
  
};

export default App;
