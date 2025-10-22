import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Checkout from "./Checkout";
import "./app.css";
import Signup from "./signup";
import Login from "./login";
import Navbar from "./Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
