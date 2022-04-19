import { useState } from "react";
import "./App.css";
import InputBoxes from "./Components/InputBoxes";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="App">
        <InputBoxes length={4} onChange={(val) => setValue(val)} perBox={1} />
      </div>
      <h3 className="h3">{value}</h3>
    </>
  );
}

export default App;
