import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Home</h3>
      <button onClick={() => navigate("/registration/one")}>Register</button>
    </div>
  );
};
