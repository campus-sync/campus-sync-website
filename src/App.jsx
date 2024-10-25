import { useState } from "react";
import "./App.css";
// import Test from "./components/test";
// import Test2 from "./components/test2";
// import Header from "./components/header/header";
import Vendor from "./components/vendor/vendor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Vendor />
    </>
  );
}

export default App;
