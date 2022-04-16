import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    axios.get(`http://localhost:8080/countries`).then((res) => {
      setData(res.data);
    });
  };

  const ascSorting = () => {
    axios
      .get(`http://localhost:8080/countries?_sort=population&_order=asc`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const handleFilter = () => {
    axios
      .get(`http://localhost:8080/countries?country=${data.country}`)
      .then(() => {
        showData();
      });
  };

  const descSorting = () => {
    axios
      .get(`http://localhost:8080/countries?_sort=population&_order=desc`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const deleteItem = (ch) => {
    axios.delete(`http://localhost:8080/countries/${ch}`).then(() => {
      showData();
    });
  };

  return (
    <div>
      <div>
        {"Sort By Population:  "}
        <button
          onClick={() => {
            ascSorting();
          }}
        >
          Low To High
        </button>
        <button
          onClick={() => {
            descSorting();
          }}
        >
          High To Low
        </button>
        <br />
        <br />
        <div> Filter By Country: </div>
        <select onChange={handleFilter}>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Nepal">Nepal</option>
        </select>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
