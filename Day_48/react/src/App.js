import "./App.css";
import Name from "./components/Name";
import DOB from "./components/Dob";
import Student from "./components/Student";
function App() {
  const studentName = "Raftaar";
  const studentDetail =[
    {
      name: "Shubh",
      branch: "CSE",
      year: "second"
    },
    {
      name: "Raftaar",
      branch: "CE",
      year: "Final"
    },
    {
      name: "Krishna",
      branch: "CHE",
      year: "First"
    }
  ]
  return (
    <div>
      <div>
        <Student name={studentDetail[0].name} year={studentDetail[0].year} branch={studentDetail[0].branch} ></Student>
      </div>
      <div></div>
      <div></div>
      <Name></Name>
      <DOB date="05" month="July" year="2002"></DOB>
      <Name></Name>
       <DOB date="31" month="August" year="2003"></DOB>
      <Name></Name>
      <DOB month={studentName} year="2003"></DOB>      

      <h1 className="helloji">Hello Jee</h1>
    </div>
  );
}

export default App;
