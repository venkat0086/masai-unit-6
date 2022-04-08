import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { EmailInput } from "./Pages/EmailInput";
import { PasswordInput } from "./Pages/PasswordInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-email" element={<EmailInput />} />
        <Route path="/login-password" element={<PasswordInput />} />
      </Routes>
    </div>
  );
}

export default App;
