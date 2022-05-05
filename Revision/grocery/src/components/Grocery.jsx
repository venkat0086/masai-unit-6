import React from "react";
import axios from "axios";

export class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      qty: "",
      desc: "",
      image: "",
      Data: [],
      Page: 1,
    };
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleQnty = this.handleQnty.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleImg = this.handleImg.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  handleQnty(e) {
    this.setState({
      qty: e.target.value,
    });
  }
  handleDesc(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  handleImg(e) {
    this.setState({
      image: e.target.value,
    });
  }
  handleAdd(e) {
    const { name, price, qty, desc, image } = this.state;
    const payload = {
      Title: name,
      Price: price,
      Quantity: qty,
      Description: desc,
      Image: image,
    };
    axios
      .post("https://surf-scythe-jupiter.glitch.me/Grocery", payload)
      .then((res) => {
        alert("Item Added");
        this.getdata();
      });
  }
  componentDidMount() {
    this.getdata();
  }

  getdata() {
    const { Page } = this.state;
    return axios
      .get("https://surf-scythe-jupiter.glitch.me/Grocery", {
        params: {
          _limit: 2,
          _page: Page,
        },
      })
      .then((res) => this.setState({ Data: res.data }));
  }
  handleDelete(id) {
    axios
      .delete(`https://surf-scythe-jupiter.glitch.me/Grocery/${id}`)
      .then((res) => this.getdata());
  }

  handlePage(value) {
    this.setState({ Page: this.state.Page + value });
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.Page !== this.state.Page) {
      this.getdata();
    }
  }
  render() {
    const { name, price, qty, desc, image, Data } = this.state;

    return (
      <div>
        <h1>ADD Items</h1>
        <div>
          <label>Item Name: </label>
          <input
            type="text"
            value={name}
            onChange={this.handleName}
            placeholder="Enter item name"
          />
          <br />
          <br />
          <label>Item Price: </label>
          <input
            type="text"
            value={price}
            onChange={this.handlePrice}
            placeholder="Enter item price"
          />
          <br />
          <br />
          <label>Item Quantity: </label>
          <input
            value={qty}
            onChange={this.handleQnty}
            type="text"
            placeholder="Enter item quantity"
          />
          <br />
          <br />
          <label>Item Description: </label>
          <input
            value={desc}
            onChange={this.handleDesc}
            type="text"
            placeholder="Enter item description"
          />
          <br />
          <br />
          <label>Upload Image: </label>
          <input
            value={image}
            onChange={this.handleImg}
            type="text"
            placeholder="Add image"
          />
          <br />
          <br />
          <button onClick={this.handleAdd.bind(this)}>ADD</button>
        </div>
        <div className="item_div">
          <table width={"100%"}>
            <thead>
              <tr>
                <td>Name </td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Description</td>
                <td>Image</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {Data.map((el) => (
                <tr key={el.id}>
                  <td>{el.Title}</td>
                  <td>{el.Price} </td>
                  <td>{el.Quantity} </td>
                  <td>{el.Description} </td>
                  <td>
                    {" "}
                    <img src={el.Image} alt="" width={"50%"} height={"100px"} />
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(el.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => this.handlePage(-1)}>Previous</button>
          <button onClick={() => this.handlePage(1)}>Next</button>
        </div>
      </div>
    );
  }
}
