import "./App.css";
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", city: "", country: "", State: "", ZIP: "",
   comment: false, street:"", candidates: false, Offer: false, all:"",
   });
   function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  ;
  function submitHandler(event){
    event.preventDefault()
    console.log("Your Detail in Object Form")
    console.log(formData)
    alert("Check Your Detail in Console");
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col" auto >
        <div>
          <label htmlFor="firstName" className=" border-black">First Name : </label>
          <input
            className="border-4 border-gray-950"
            type="text"
            placeholder="Aditya..."
            onChange={changeHandler}
            name="firstName"
            id="firstName"
            autoComplete="name"
            value={formData.firstName}
          />
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            placeholder="Mathur..."
            onChange={changeHandler}
            name="lastName"
            id="lastName"
            autoComplete="name"
            value={formData.lastName}
          />
        </div>
        <div>
        <label htmlFor="email">Email </label>
          <input
            type="email"
            placeholder="ingo@adi.com..."
            onChange={changeHandler} 
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            placeholder="Gali No. 4...."
            onChange={changeHandler}
            name="street"
            id="street"
            value={formData.street}
          />
        </div>


        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="Ghaziabad"
            onChange={changeHandler}
            name="city"
            id="city"
            value={formData.city}
          />
        </div>

        <div>
          <label htmlFor="State">State/Province</label>
          <input
            type="text"
            placeholder="Uttar Pradesh"
            onChange={changeHandler}
            name="State"
            id="State"
            value={formData.State}
          />
        </div>


        <div>
        <label htmlFor="country">country</label>
          <select name="country"
            id="country"
            autoComplete="country"
            value={formData.country}
            onChange={changeHandler}>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Russia">Russia</option>
            <option value="Japan">Japan</option>
            <option value="Korea">Korea</option>
          </select>
        </div>

        <div>
          <label htmlFor="ZIP">ZIP/ Postel Code</label>
          <input
            type="number"
            placeholder="201309"
            onChange={changeHandler}
            name="ZIP"
            id="ZIP"
            value={formData.ZIP}
          />
        </div>

        {/* By Email Start / checkbox Section */}

        <div>
          <p>My Email</p>
          <br />

          <input
            type="checkbox"
            onChange={changeHandler}
            name="comment"
            id="comment"
            checked={formData.comment}
          />
          <label htmlFor="comment">
            <h4>Comments</h4>
            <p>Get notified when someones posts a comment on a posting.</p>
          </label>

          
          <br />

          <input
            type="checkbox"
            onChange={changeHandler}
            name="candidates"
            id="candidates"
            checked={formData.candidates}
          />
          <label htmlFor="candidates">
            <h4>Candidates</h4>
            <p>Get notified when a candidate applies for a job.</p>
          </label>

          <br />

          <input
            type="checkbox"
            onChange={changeHandler}
            name="Offer"
            id="Offer"
            checked={formData.Offer}
          />
          <label htmlFor="candidates">
            <h4>Offer</h4>
            <p>Get notified when a candidate applies for a job.</p>
          </label>


        </div>

        <div>
          <h4>Push Notificatios</h4>
          <p>These are delivered via SMS to your mobile phone.</p>
        </div>
        <div>

          <input
            type="radio"
            onChange={changeHandler}
            name="all"
            value="everything"
            id="everything"
            checked={formData.all === "everything"}
          />
          <label htmlFor="everything"> Everything</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="all"
            value="SaE"
            id="SaE"
            checked={formData.all === "SaE"}
          />
          <label htmlFor="SaE"> Same As Email</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="all"
            value="NPM"
            id="NPN"
            checked={formData.all === "NPM"}
          />
          <label htmlFor="NPN"> No Push Notificatios</label>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
