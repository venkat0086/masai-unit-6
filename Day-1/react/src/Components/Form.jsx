// import { useState } from "react";
// import axios from "axios";
// export const Form = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     payment_method: "",
//     image_url: "",
//     total_votes: "",
//     reviews: "",
//     cost_for_one: "",
//     rating: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;

//     setFormData({ ...formData, [id]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post("http://localhost:3002/users", formData).then(() => {
//       alert("User Registered");
//       setFormData({
//         username: "",
//         age: "",
//         email: "",
//       });
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Sign Up</h3>
//       <input
//         value={formData.username}
//         type="text"
//         id="username"
//         placeholder="Enter username"
//         onChange={handleChange}
//       />
//       <input
//         value={formData.age}
//         type="number"
//         id="age"
//         placeholder="Enter Age"
//         onChange={handleChange}
//       />

//       <input
//         value={formData.email}
//         type="text"
//         id="email"
//         placeholder="Enter email"
//         onChange={handleChange}
//       />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };
