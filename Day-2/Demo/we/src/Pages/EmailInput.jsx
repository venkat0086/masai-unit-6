import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export const EmailInput = () => {
  const { email, dispatch } = useContext(LoginContext);
  const navigate = useNavigate();
  console.log(email);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
        }
      />
      <button onClick={() => navigate("/login-password")}>NEXT</button>
    </div>
  );
};
