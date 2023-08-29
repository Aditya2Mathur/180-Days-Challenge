import React from "react";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
    const gobach = useNavigate()
    function goBackHandler() {
        gobach(-1)
    }
    return (
        <div>
        <h2>This is Gallery Page</h2>
        <button onClick={goBackHandler}> Go Back</button>
    </div>
    )
}

export default Gallery;