// import { useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { Todos } from "./Components/TodosCreate";
import { useSelector } from "react-redux";
import { Register } from "./Components/Register";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  // const [count, setCount] = useState(0);

  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <div className="App">
      <div>
        <Link to="/">Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/todos">Create Todos </Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Todos />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
