import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(
    Array.from(Array(40).keys(), (n) => n + 1)
  );
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!fetching) return;
    morefetch();
  }, [fetching]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setFetching(true);
    } else {
      return;
    }
  };
  const morefetch = () => {
    setTimeout(() => {
      setState((pre) => [
        ...pre,
        ...Array.from(Array(40).keys(), (n) => n + pre.length + 1),
      ]);
      setFetching(false);
    }, 2500);
  };
  return (
    <div className="App">
      <div className="main-div">
        {state.map((el) => (
          <div> Masai Student {el}</div>
        ))}
      </div>
      {fetching && "Loading"}
    </div>
  );
}

export default App;
