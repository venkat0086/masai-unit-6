import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Restuarant.css";
export const RestaurantDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurants").then((res) => {
      setData([...res.data]);
    });
  }, []);

  return (
    <div className="main_content">
      <h3>List of Restaurants</h3>
      <div className="srt_btn">
        {"Sort By Price: "}
        <button>Ascending</button>
        <button>Descending</button>
      </div>
      <div className="srt_rating">
        {"Sort By Ratings: "}
        <button>{"4 & above"}</button>
        <button>{"3 & above"}</button>
        <button>{"2 & above"}</button>
        <button>{"1 & above"}</button>
      </div>
      <div className="payment_method">
        {"Filter By Payment: "}
        <button>{"Card"}</button>
        <button>{"Cash"}</button>
        <button>{"UPI"}</button>
      </div>

      {data.map((e) => (
        <div className="full_details" key={e.id}>
          <div>
            <img className="img_url" src={e.image_url} alt="image" />
          </div>
          <div className="res_details">
            <h2>{e.title}</h2>
            <div>{e.category}</div>
            <div>{`Cost Rs.${e.cost_for_one} for one`}</div>
            <div>{`Accepts ${e.payment_method} payments only`}</div>
          </div>
          <div>
            <h3>{e.rating}</h3>
            <div>{`${e.total_votes} votes`}</div>
            <div>{`${e.reviews} reviews`}</div>
          </div>
        </div>
      ))}

      {/* {data
        .filter((e) => e.payment_method === "card")
        .map((e) => (
          <div className="full_details" key={e.id}>
            <div>
              <img className="img_url" src={e.image_url} alt="image" />
            </div>
            <div className="res_details">
              <h2>{e.title}</h2>
              <div>{e.category}</div>
              <div>{`Cost Rs.${e.cost_for_one} for one`}</div>
              <div>{`Accepts ${e.payment_method} payments only`}</div>
            </div>
            <div>
              <h3>{e.rating}</h3>
              <div>{`${e.total_votes} votes`}</div>
              <div>{`${e.reviews} reviews`}</div>
            </div>
          </div>
        ))} */}
    </div>
  );
};
