import "./App.css";
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", city: "", country: "", State: "", ZIP: "",
    comment: false, street: "", candidates: false, Offer: false, all: "",
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
  function submitHandler(event) {
    event.preventDefault()
    console.log("Your Detail in Object Form")
    console.log(formData)
    alert("Check Your Detail in Console");
  }
  return (
    <div className=" flex justify-center w-[100%]">
      <form onSubmit={submitHandler} className="flex flex-col items-start gap-1 border w-[50%] border-black h-[100%]" auto >
        <div className="flex flex-col w-[100%]">
          <label htmlFor="firstName" className=" text-[1rem] font-bold border-black">First Name : </label>
          <input
            className="border-2 border-gray-950"
            type="text"
            placeholder="Aditya..."
            onChange={changeHandler}
            name="firstName"
            id="firstName"
            autoComplete="name"
            value={formData.firstName}
          />
        </div>

        <div className="flex flex-col w-[100%]">
          <label className="text-[15px] font-bold" htmlFor="lastName">Last Name : </label>
          <input
            className="border-2 border-gray-950"
            type="text"
            placeholder="Mathur..."
            onChange={changeHandler}
            name="lastName"
            id="lastName"
            autoComplete="name"
            value={formData.lastName}
          />
        </div>

        <div className="flex flex-col w-[100%]">
          <label htmlFor="email" className="text-[15px] font-bold">Email </label>
          <input
            className="border-2  border-gray-950"
            type="email"
            placeholder="ingo@adi.com..."
            onChange={changeHandler}
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
          />
        </div>
        <div className="flex flex-col w-[100%]">
          <label htmlFor="street" className="text-[15px] font-bold">Street Address</label>
          <input
            className="border-2  border-gray-950"
            type="text"
            placeholder="Gali No. 4...."
            onChange={changeHandler}
            name="street"
            id="street"
            value={formData.street}
          />
        </div>


        <div className="flex flex-col w-[100%]">
          <label htmlFor="city" className="text-[15px] font-bold">City</label>
          <input
            className="border-2  border-gray-950"
            type="text"
            placeholder="Ghaziabad"
            onChange={changeHandler}
            name="city"
            id="city"
            value={formData.city}
          />
        </div>

        <div className="flex flex-col w-[100%]"> 
          <label htmlFor="State" className="text-[15px] font-bold">State/Province</label>
          <input
            className="border-2  border-gray-950"
            type="text"
            placeholder="Uttar Pradesh"
            onChange={changeHandler}
            name="State"
            id="State"
            value={formData.State}
          />
        </div>


        <div className="flex flex-col w-[100%]">
          <label htmlFor="country" className="text-[15px] font-bold">country</label>
          <select name="country"
            className="border-2  border-gray-950"
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

        <div className="flex flex-col w-[100%]">
          <label htmlFor="ZIP" className="text-[15px] font-bold">ZIP/ Postel Code</label>
          <input
            className="border-2  border-gray-950"
            type="number"
            placeholder="201309"
            onChange={changeHandler}
            name="ZIP"
            id="ZIP"
            value={formData.ZIP}
          />
        </div>

        {/* By Email Start / checkbox Section */}
        <p className="text-[15px] font-bold">My Email</p>
        <div className="flex flex-col w-[100%]">
          <div className="flex">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="comment"
              id="comment"
              checked={formData.comment}
            />

            <label htmlFor="comment" className="text-[15px] font-bold">
              Comments
            </label>
          </div>
          <p className="ml-3">Get notified when someones posts a comment on a posting.</p>


          <br />

          <div className="flex ">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="candidates"
              id="candidates"
              checked={formData.candidates}
            />
            <label htmlFor="candidates" className="text-[15px] font-bold">
              <h4>Candidates</h4>

            </label>
          </div>
          <p className="ml-3">Get notified when a candidate applies for a job.</p>
          <br />

          <div className="flex">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="Offer"
              id="Offer"
              checked={formData.Offer}
            />
            <label htmlFor="candidates" className="text-[15px] font-bold">
              <h4>Offer</h4>

            </label>
          </div>
          <p className="ml-3">Get notified when a candidate applies for a job.</p>

        </div>

        <div>
          <h4 className="text-[15px] font-bold">Push Notificatios</h4>
          <p>These are delivered via SMS to your mobile phone.</p>
        </div>
        <div>

          <div>
            <input
              type="radio"
              onChange={changeHandler}
              name="all"
              value="everything"
              id="everything"
              checked={formData.all === "everything"}
            />
            <label htmlFor="everything" className="text-[15px] font-bold"> Everything</label>
          </div>
          <div>

           <div>
           <input
              type="radio"
              onChange={changeHandler}
              name="all"
              value="SaE"
              id="SaE"
              checked={formData.all === "SaE"}
            />
            <label htmlFor="SaE" className="text-[15px] font-bold"> Same As Email</label>
           </div>
          </div>

          <input
            type="radio"
            onChange={changeHandler}
            name="all"
            value="NPM"
            id="NPN"
            checked={formData.all === "NPM"}
          />
          <label htmlFor="NPN" className="text-[15px] font-bold"> No Push Notificatios</label>
        </div>
        <div>
          <button className="border-2 border-blue-600  rounded-lg px-3 py-1 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
