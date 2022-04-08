import { useNavigate } from "react-router-dom";
import "../Styles/Styles.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button
        className="register_btn"
        onClick={() => navigate("/registration/one")}
      >
        Register
      </button>

      <button className="register_btn" onClick={() => navigate("/users")}>
        View Users
      </button>
    </div>
  );
};
