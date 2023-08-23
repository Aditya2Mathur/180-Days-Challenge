import React, { useState } from "react";
import data from './data';
import Tour from "./components/Tour";

const App = () => {
  const [tours, setTours] = useState(data)

  function removeCardHandler(id){
    const newTour = tours.filter(tour => tour.id !== id)
  }
  return (
    <div>
      <Tour tours = {tours} removeCardHandler = {removeCardHandler}> </Tour>
    </div>
  );
};

export default App;
