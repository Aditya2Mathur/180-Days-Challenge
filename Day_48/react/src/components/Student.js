import  "./Student.css";

function Student(props){
    const name = props.name;
    const branch = props.branch;
    const year = props.year;

    return (
        <div clasName="dob-div">
            <span className="dob"> {name} </span>
            <span className="dob"> {branch} </span>
            <span className="dob"> {year} </span>
        </div>
    )
}
export default Student;