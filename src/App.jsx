import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./components/test";
import Test2 from "./components/test2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test />
      <Test2 />
    </>
  );
}

export default App;
