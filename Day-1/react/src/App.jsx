import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RestaurantDetails } from "./Components/RestaurantDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
