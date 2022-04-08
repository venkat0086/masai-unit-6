import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Styles.css";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user_main">
      <table className="user_table">
        <thead className="table_head">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>State of Address</th>
            <th>Address</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.date_of_birth}</td>
              <td>{e.state_of_residence}</td>
              <td>{e.address}</td>
              <td>{e.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
