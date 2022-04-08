import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Restuarant.css";
export const RestaurantDetails = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants?_limit=5&_page=${page}`)
      .then((res) => {
        setData([...res.data]);
      });
  }, [page]);

  const ascSortMethod = () => {
    axios
      .get(`http://localhost:8080/restaurants?&_sort=cost_for_one&_order=asc`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const dscSortMethod = () => {
    axios
      .get("http://localhost:8080/restaurants?&_sort=cost_for_one&_order=desc")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const cashFilter = () => {
    axios
      .get(
        "http://localhost:8080/restaurants?payment_method=cash&_limit=5&_page=${page}"
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  const cardFilter = () => {
    axios
      .get("http://localhost:8080/restaurants?payment_method=card")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const upiFilter = () => {
    axios
      .get("http://localhost:8080/restaurants?payment_method=upi")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const fourRate = () => {
    axios
      .get("http://localhost:8080/restaurants?rating_gte=4&rating_lte=4.9")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const threeRate = () => {
    axios
      .get("http://localhost:8080/restaurants?rating_gte=3&rating_lte=3.9")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const twoRate = () => {
    axios
      .get("http://localhost:8080/restaurants?rating_gte=2&rating_lte=2.9")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const oneRate = () => {
    axios
      .get("http://localhost:8080/restaurants?rating_gte=1&rating_lte=1.9")
      .then((res) => {
        setData([...res.data]);
      });
  };

  const eventHandle = (val) => {
    let { id, value } = val.target;
    setFormData((dis) => ({ ...dis, [id]: value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/restaurants`, formData).then(() => {
      alert("Data Saved");
    });
  };

  return (
    <div className="main_content">
      <h3>List of Restaurants</h3>

      <h2>Add Restaurants</h2>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Enter Restaurant name"
          onChange={eventHandle}
          id="title"
        />
        <input
          type="text"
          placeholder="Enter Categories"
          onChange={eventHandle}
          id="categories"
        />
        <input
          type="text"
          placeholder="Enter payment method"
          onChange={eventHandle}
          id="payment_method"
        />
        <input
          type="text"
          placeholder="Enter image"
          onChange={eventHandle}
          id="image_url"
        />
        <input
          type="number"
          placeholder="Enter cost_for_two"
          onChange={eventHandle}
          id="cost_for_one"
        />
        <input
          type="number"
          placeholder="Enter Rating"
          onChange={eventHandle}
          id="rating"
        />
        <input
          type="text"
          placeholder="Enter vote"
          onChange={eventHandle}
          id="total_votes"
        />
        <input
          type="text"
          placeholder="Enter review"
          onChange={eventHandle}
          id="reviews"
        />
        <input type="submit" value={"submit"} />
      </form>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className="srt_btn">
        {"Sort By Price: "}
        <button
          onClick={() => {
            ascSortMethod();
          }}
        >
          Low to High
        </button>
        <button
          onClick={() => {
            dscSortMethod();
          }}
        >
          High to Low
        </button>
      </div>
      <div className="srt_rating">
        {"Sort By Ratings: "}
        <button
          onClick={() => {
            fourRate();
          }}
        >
          {"4 & above"}
        </button>
        <button
          onClick={() => {
            threeRate();
          }}
        >
          {"3 & above"}
        </button>
        <button
          onClick={() => {
            twoRate();
          }}
        >
          {"2 & above"}
        </button>
        <button
          onClick={() => {
            oneRate();
          }}
        >
          {"1 & above"}
        </button>
      </div>
      <div className="payment_method">
        {"Filter By Payment: "}
        <button
          onClick={() => {
            cardFilter();
          }}
        >
          {" "}
          {"Card"}
        </button>
        <button
          onClick={() => {
            cashFilter();
          }}
        >
          {"Cash"}
        </button>
        <button
          onClick={() => {
            upiFilter();
          }}
        >
          {"UPI"}
        </button>
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
    </div>
  );
};
