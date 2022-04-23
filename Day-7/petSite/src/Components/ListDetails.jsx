import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "../Styles/styles.css";

export const ListingDetails = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [sub, setSub] = useState([]);

  useEffect(() => {
    axios
      .get(`https://humorous-quill-tamarind.glitch.me/list/${id}`)
      .then((res) => {
        setList(res.data);
      });
  }, []);

  axios
    .get(`https://humorous-quill-tamarind.glitch.me/list/${id}`)
    .then((res) => {
      setSub(res.data.subCat);
    });

  return (
    <div>
      <img src={"https://i.pravatar.cc/300"} alt="img" />
      <div className="teacher-Details">
        <div>Name: {list.name}</div>
        <div>City: {list.city}</div>
        <div>Verified: {list.verified}</div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Summary</th>
              <th>Number of Pet</th>
              <th>Pet Type</th>
              <th>Pet Size</th>
              <th>Potty Break</th>
              <th>Walk</th>
              <th>Home Type</th>
              <th>Outdoor</th>
              <th>Emergency</th>
            </tr>
          </thead>
          <tbody>
            {sub.map((e) => (
              <tr key={e.id}>
                <td>{e.summary}</td>
                <td>{e.noPet}</td>
                <td>{e.typeOfPet}</td>
                <td>{e.petSize}</td>
                <td>{e.pottyBreak}</td>
                <td>{e.walk}</td>
                <td>{e.homeType}</td>
                <td>{e.outdoor}</td>
                <td>{e.emergency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
