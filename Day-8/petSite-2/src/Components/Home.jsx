import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/styles.css";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    axios.get(`https://humorous-quill-tamarind.glitch.me/list`).then((res) => {
      setData(res.data);
    });
  };

  const ascSorting = () => {
    axios
      .get(
        `https://humorous-quill-tamarind.glitch.me/list?_sort=cost_per_day&_order=asc`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  const yesFilter = () => {
    axios
      .get(`https://humorous-quill-tamarind.glitch.me/list?verified=Yes`)
      .then((res) => {
        setData([...res.data]);
      });
  };
  const noFilter = () => {
    axios
      .get(`https://humorous-quill-tamarind.glitch.me/list?verified=No`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const descSorting = () => {
    axios
      .get(
        `https://humorous-quill-tamarind.glitch.me/list?_sort=cost_per_day&_order=desc`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  return (
    <div className="main-contain">
      <div className="sort-filter-main">
        <div>
          {"Sort By Cost per Day:  "}
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
        </div>
        <div>
          Filter By Verification:
          <button
            onClick={() => {
              yesFilter();
            }}
          >
            Verified
          </button>
          <button
            onClick={() => {
              noFilter();
            }}
          >
            Not Verified
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost per day</th>
              <th>Verified</th>
              <th>Rating</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.address}</td>
                <td>{e.capacity}</td>
                <td>{e.cost_per_day}</td>
                <td>{e.verified}</td>
                <td>{e.rating}</td>
                <td>
                  <button>
                    <Link to={`/listings/${e.id}`}>View</Link>
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
