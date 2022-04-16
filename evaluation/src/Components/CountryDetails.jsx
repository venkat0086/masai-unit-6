import { useEffect, useState } from "react";
import axios from "axios";

export const CountryDetails = () => {
  const [formData, setFormData] = useState([]);

  const eventHandle = (val) => {
    let { id, value } = val.target;
    setFormData((dis) => ({ ...dis, [id]: value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/countries`, formData).then(() => {
      alert("Data Saved");
    });
  };
  return (
    <div>
      <h1>Submit Country Details</h1>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Enter Country Name"
          onChange={eventHandle}
          id="country"
        />

        <input
          type="text"
          placeholder="Enter City Name"
          onChange={eventHandle}
          id="city"
        />

        <input
          type="number"
          placeholder="Enter Population"
          onChange={eventHandle}
          id="population"
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};
