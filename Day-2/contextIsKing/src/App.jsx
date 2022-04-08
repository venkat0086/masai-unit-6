import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { FirstPage } from "./Pages/FirstPage";
import { SecondPage } from "./Pages/SecondPage";
import { Users } from "./Pages/Users";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + action.payload };
//     case "DECREMENT":
//       return { count: state.count - action.payload };
//     default:
//       throw new Error();
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { count } = state;

  return (
    <div className="App">
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        +
      </button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/one" element={<FirstPage />} />
        <Route path="/registration/two" element={<SecondPage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
