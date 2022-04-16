import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CountryDetails } from "./Components/CountryDetails";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
