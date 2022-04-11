import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { token, isAuthenticated } = useSelector((state) => state.login);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <h1>Dashboard</h1>;
};
