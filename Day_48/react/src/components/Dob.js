import "./Dob.css"

function DOB (props){
    const date = props.date;
    const month = props.month;
    const year = props.year;

    return (
        <div clasName="dob-div">
            <h4 className="dob">{date}</h4>
            <h4 className="dob">{month}</h4>
            <h4 className="dob">{year}</h4>
        </div>
    )

}

export default DOB;