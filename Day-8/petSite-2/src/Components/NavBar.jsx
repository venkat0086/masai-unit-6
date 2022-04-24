import { Link } from "react-router-dom";
import "../Styles/styles.css";
export const NavBar = () => {
  return (
    <div className="nav-bar-main">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/login">Login </Link>
      </div>
      <div>
        <Link to="/listings/create">Create Listing</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};
