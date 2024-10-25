import { useState } from "react";
import "./App.css";
// import Test from "./components/test";
// import Test2 from "./components/test2";
// import Header from "./components/header/header";
import Vendor from "./components/vendor/vendor";
import Canteen from "./components/canteen/canteen";
import Signin from "./components/newsignin/sign";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/canteen" element={<Canteen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
