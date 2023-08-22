import React, { useState } from "react";
import "./StudentDetail.css";
import Card from "./Card";

const  StudentDetail = (props) => {
    const [name, setName] = useState(props.name)
   

    function clickHandler(){
        setName("Checked Student");
        console.log("Buttion Clicked");
    }


    return(
        <Card className = "student-detail">
            <div>
                <h2>{name}</h2>
            </div>
            <button onClick={clickHandler}>
                Student Checked
            </button>
        </Card>
    )
}

export default StudentDetail;



