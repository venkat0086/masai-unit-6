import { useContext } from "react";
import { RegisterContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";

export const FirstPage = () => {
  const { name, age, date_of_birth, dispatch } = useContext(RegisterContext);
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
      />
      <input
        type="date"
        value={date_of_birth}
        onChange={(e) => dispatch({ type: "DOB", payload: e.target.value })}
      />

      <button onClick={() => navigate("/registration/two")}>Next</button>
    </div>
  );
};
