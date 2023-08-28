import "./App.css";
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comment: "", checking: false, sex: "", favCar: "" });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault()
    console.log("Your Detail in Object Form")
    console.log(formData)
    alert("Check Your Detail in Console");
  }
  
  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />

        <input
          type="text"
          placeholder="last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br></br>
        <input
          type="email"
          placeholder="last Name"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br></br>
        <textarea
          type="text"
          placeholder="Enter Your Comment..."
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        />
        <br />

        <label
          htmlFor="checking"
        > ho Gaya</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="checking"
          id="checking"
          checked={formData.checking}
        />
        <fieldset>
          <legend>Sex :</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="sex"
            value="Male"
            id="Male"
            checked={formData.sex === "Male"}
          />
          <label htmlFor="Male"> Male</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="sex"
            value="Female"
            id="Female"
            checked={formData.sex === "Female"}
          />
          <label htmlFor="Female"> Female</label>
        </fieldset>
        <div>
          <select name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}>
            <option value="scarpio">Scarpio</option>
            <option value="fartuner">Fartuner</option>
            <option value="Tharr">Tharr</option>
            <option value="Legender">Legender</option>
            <option value="Defender">Defender</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
