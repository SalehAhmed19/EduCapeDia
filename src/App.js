import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
