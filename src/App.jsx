import { useState } from "react";
import "./App.css";
// import Test from "./components/test";
// import Test2 from "./components/test2";
// import Header from "./components/header/header";
import Vendor from "./components/vendor/vendor";
import Canteen from "./components/canteen/canteen";
import Signin from "./components/newsignin/sign";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signin />
    </>
  );
}

export default App;
