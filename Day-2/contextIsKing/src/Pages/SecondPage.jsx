import { useContext } from "react";
import { RegisterContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../Styles/Styles.css";

export const SecondPage = () => {
  const {
    name,
    age,
    date_of_birth,
    address,
    pincode,
    state_of_residence,
    dispatch,
    handleSubmit,
  } = useContext(RegisterContext);
  const navigate = useNavigate();

  if (!name || !age || !date_of_birth) {
    return <Navigate to="/registration/one" />;
  }

  return (
    <>
      <h2>Address Details</h2>
      <div className="second_page_main">
        <input
          type="text"
          placeholder="State of Residence"
          value={state_of_residence}
          onChange={(e) =>
            dispatch({ type: "STATE_OF_RESIDENCE", payload: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) =>
            dispatch({ type: "ADDRESS", payload: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) =>
            dispatch({ type: "PINCODE", payload: e.target.value })
          }
        />
        <br />
        <br />

        <button
          disabled={
            !name ||
            !age ||
            !date_of_birth ||
            !state_of_residence ||
            !address ||
            !pincode
          }
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};
