// Navbar.js
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "./auth";
import { getCart } from "./localstorage";
import { useEffect, useState } from "react";
import "./admin.css";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        go<span className="logo-text">cart</span>.
      </Link>
      <div className="nav-links">
        {!user ? (
          <>
            <button className="login-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Log In
            </button>
          </>
        ) : (
          <>
            <span>Welcome, {user.username}</span>
            <button className="login-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        )}
        <Link to="/checkout">🛒 Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
