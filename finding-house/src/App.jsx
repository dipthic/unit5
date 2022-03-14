import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [userData, setuserData] = useState(false);
  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => setuserData(!userData)}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {userData ? "Show Rentals" : "Add House"}
      </button>
      {/* Show component based on state */}
      <br />
      <br />
      {userData ?
         <AddHouse /> : <Rentals />}
    </div>
  );
}

export default App;
