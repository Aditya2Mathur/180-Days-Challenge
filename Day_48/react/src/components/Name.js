import "./Name.css";


function Name(){
    const firstName = 'Aditya';
    const middleName = 'Kumar';
    const lastName = 'Mathur';

    return(
    <div className="name-div">
        <span className="Name">{firstName}</span>
        <span className="Name">{middleName}</span>
        <span className="Name">{lastName}</span>
    </div>
    );
}

export default Name;