import "./App.css";
import React from "react";
import Students from "./components/Student";
const App = () => {
  const students = [
    {
      id: "std1",
      name: "Aditya",
      branch: "CSE",
      year: "Final"
    },
    
    {
      id: "std2",
      name: "Asif",
      branch: "CSE",
      year: "Final"
    },
    
    {
      id: "std3",
      name: "Sumit",
      branch: "CHE",
      year: "Final"
    },
    
    {
      id: "std4",
      name: "Prakash",
      branch: "CSE",
      year: "Final"
    }
    
  ]
  return(
    <div>
      <Students>detail = {students}</Students>
    </div>
  )
}

export default App;
