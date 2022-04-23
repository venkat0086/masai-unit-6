import "./App.css";
import { Home } from "./Components/Home";
// import { useSelector } from "react-redux";
import { NavBar } from "./Components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { ListCreate } from "./Components/List";
import { ListingDetails } from "./Components/ListDetails";

// const PrivateRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

function App() {
  // const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/listings/create" element={<ListCreate />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        {/* <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/teachers"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TeachersCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/teachers/:teacherId"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TeachersDetails />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
