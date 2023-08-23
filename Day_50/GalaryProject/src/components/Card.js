import { useState } from "react"
import "./Card.css"

function Card({id, image, info, price, name}){
    const[readmore, setReadmore] = useState(false);
    const discription = `${info.subString(0, 200)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }
   

    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-details ">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div> 
                {discription}
                <span className="read-more" onClick={readmoreHandler}>
                    {
                        readmore ? `show less` : `read more`
                    }
                </span>
            </div>
            <button className="btn" onClick={removeCardHandler}>
                Not Interested
            </button>
        </div>
    )

}