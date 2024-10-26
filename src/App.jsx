import "./App.css";
// import Test from "./components/test";
// import Test2 from "./components/test2";
// import Header from "./components/header/header";
import Vendor from "./components/vendor/vendor";
import Canteen from "./components/canteen/canteen";
import Signin from "./components/newsignin/sign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/calendar/hitCalendar";
import Admin from "./components/admin/admin";
import Leaderboard from "./components/leaderboard/leaderboard";
import Menu from "./components/menu/menu";
import StudentEnrol from "./components/menu/studentenrol";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import ClassRegistration from "./ClassRegistration";
// import SubjectAllotment from "./SubjectAllotment";
// import StudentRegistration from "./StudentRegistration";
// import Calendar from "./Calendar";
// import RewardCredits from "./RewardCredits";
import VendorView from "./components/vendor/vendor-view";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/vendor/:id" element={<VendorView />} />
      </Routes>
    </BrowserRouter>
    // <Calendar />
    // <Admin />
  );
}

export default App;
