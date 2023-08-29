import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    function chichHandler(){
        navigate("/about")
    }

    return (
        <div>
        <h2>This is Contact Page</h2>
        <button onClick={chichHandler}>
            About
        </button>
    </div>
    )
}

export default Contact;