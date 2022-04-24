import { useEffect, useReducer, useState } from "react";
import { getListData } from "../Redux/List/action";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/styles.css";
const initstate = {
  name: "",
  city: "",
  address: "",
  capacity: "",
  cost_per_day: "",
  verified: "",
  rating: "",
  subCat: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_NAME":
      return { ...state, name: payload };
    case "UPDATE_CITY":
      return { ...state, city: payload };
    case "UPDATE_ADDRESS":
      return { ...state, address: payload };
    case "UPDATE_CAPACITY":
      return { ...state, capacity: payload };
    case "UPDATE_COST":
      return { ...state, cost_per_day: payload };
    case "UPDATE_VERIFY":
      return { ...state, verified: payload };
    case "UPDATE_RATING":
      return { ...state, rating: payload };
    case "ADD_SUBCAT":
      return { ...state, subCat: [...state.subCat, payload] };
    case "RESET_FORM":
      return { ...initstate };
    default:
      throw new Error("Something Went Wrong.!");
  }
};

export const ListCreate = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const reduxdispatch = useDispatch();
  const [summary, setSummary] = useState("");
  const [noPet, setNoPet] = useState("");
  const [typeOfPet, setTypeOfPet] = useState("");
  const [petSize, setPetSize] = useState("");
  const [pottyBreak, setPottyBreak] = useState("");
  const [walk, setWalk] = useState("");
  const [homeType, setHomeType] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [emergency, setEmergency] = useState("");

  const {
    name,
    city,
    address,
    capacity,
    cost_per_day,
    verified,
    rating,
    subCat,
  } = state;

  const createForm = () => {
    const details = { ...state };
    fetch("https://humorous-quill-tamarind.glitch.me/list", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => reduxdispatch(getListData))
      .then(() => dispatch({ type: "RESET_FORM" }));
    alert("Submitted");
  };

  return (
    <div className="main_container">
      <div className="title">
        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Name"
            name=""
            id=""
            value={name}
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter City"
            name=""
            id=""
            value={city}
            onChange={(e) =>
              dispatch({ type: "UPDATE_CITY", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Address"
            name=""
            id=""
            value={address}
            onChange={(e) =>
              dispatch({ type: "UPDATE_ADDRESS", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Capacity"
            name=""
            id=""
            value={capacity}
            onChange={(e) =>
              dispatch({ type: "UPDATE_CAPACITY", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Cost Per Day"
            name=""
            id=""
            value={cost_per_day}
            onChange={(e) =>
              dispatch({ type: "UPDATE_COST", payload: e.target.value })
            }
          />
        </div>

        <h4>Verification</h4>
        <div className="radio">
          <input
            type="radio"
            checked={verified === "Yes"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_VERIFY", payload: "Yes" })
            }
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            checked={verified === "No"}
            onChange={(e) => dispatch({ type: "UPDATE_VERIFY", payload: "No" })}
          />
          <label>No</label>
        </div>

        <h4>Rating</h4>
        <div className="radio">
          <input
            type="radio"
            checked={rating === "1"}
            onChange={(e) => dispatch({ type: "UPDATE_RATING", payload: "1" })}
          />
          <label>1</label>
          <input
            type="radio"
            checked={rating === "2"}
            onChange={(e) => dispatch({ type: "UPDATE_RATING", payload: "2" })}
          />
          <label>2</label>
          <input
            type="radio"
            checked={rating === "3"}
            onChange={(e) => dispatch({ type: "UPDATE_RATING", payload: "3" })}
          />
          <label>3</label>
          <input
            type="radio"
            checked={rating === "4"}
            onChange={(e) => dispatch({ type: "UPDATE_RATING", payload: "4" })}
          />
          <label>4</label>
          <input
            type="radio"
            checked={rating === "5"}
            onChange={(e) => dispatch({ type: "UPDATE_RATING", payload: "5" })}
          />
          <label>5</label>
        </div>
      </div>

      {/* Sub Categories */}
      <div>
        <h4>Add Complete Details</h4>
        <div className="add_btn_div">
          <div>
            <input
              type="text"
              placeholder="Add Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number of Pets"
              value={noPet}
              onChange={(e) => setNoPet(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Type Pet"
              value={typeOfPet}
              onChange={(e) => setTypeOfPet(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Pet Size"
              value={petSize}
              onChange={(e) => setPetSize(e.target.value)}
            />
            <input
              type="text"
              placeholder="Say Potty Breaks or No If Yes type Yes"
              value={pottyBreak}
              onChange={(e) => setPottyBreak(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Walks"
              value={walk}
              onChange={(e) => setWalk(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Home Type"
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Outdoor "
              value={outdoor}
              onChange={(e) => setOutdoor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Emergency(If Yes) "
              value={emergency}
              onChange={(e) => setEmergency(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn"
              onClick={() => {
                const payload = {
                  id: Math.random(),
                  summary: summary,
                  noPet: noPet,
                  typeOfPet: typeOfPet,
                  petSize: petSize,
                  pottyBreak: pottyBreak,
                  walk: walk,
                  homeType: homeType,
                  outdoor: outdoor,
                  emergency: emergency,
                };
                dispatch({ type: "ADD_SUBCAT", payload });
                setSummary("");
                setEmergency("");
                setHomeType("");
                setNoPet("");
                setOutdoor("");
                setPetSize("");
                setPottyBreak("");
                setTypeOfPet("");
                setWalk("");
              }}
            >
              ADD CATEGORY
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="btn" onClick={createForm}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
