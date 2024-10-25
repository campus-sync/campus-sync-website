import { useState } from "react";
import "./App.css";
import Test from "./components/test";
import Test2 from "./components/test2";
import Header from "./components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
