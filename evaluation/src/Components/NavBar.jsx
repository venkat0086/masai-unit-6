import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/add-country">Add Country</Link>
    </div>
  );
};
