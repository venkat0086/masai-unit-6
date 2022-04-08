import { useContext } from "react";
import { RegisterContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Styles.css";

export const FirstPage = () => {
  const { name, age, date_of_birth, dispatch } = useContext(RegisterContext);
  const navigate = useNavigate();

  return (
    <>
      <h2>Basic Details</h2>
      <div className="first_page_main">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
        />
        <br />
        <br />
        <input
          type="date"
          placeholder="Date of Birth"
          value={date_of_birth}
          onChange={(e) => dispatch({ type: "DOB", payload: e.target.value })}
        />
        <br />
        <br />

        <button
          disabled={!name || !age || !date_of_birth}
          onClick={() => navigate("/registration/two")}
        >
          Next
        </button>
      </div>
    </>
  );
};
