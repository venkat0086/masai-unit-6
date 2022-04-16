import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CountryDetails } from "./Components/CountryDetails";
import { Home } from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
