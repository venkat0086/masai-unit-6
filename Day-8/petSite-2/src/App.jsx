import "./App.css";
import { Home } from "./Components/Home";
import { useSelector } from "react-redux";
import { NavBar } from "./Components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { ListCreate } from "./Components/List";
import { Login } from "./Components/Login";
import { ListingDetails } from "./Components/ListDetails";
import { Register } from "./Components/Register";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/*  <Route path="/" element={<Home />} />
       <Route path="/listings/create" element={<ListCreate />} />
        <Route path="/listings/:id" element={<ListingDetails />} /> */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/listings/create"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ListCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/listings/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ListingDetails />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
