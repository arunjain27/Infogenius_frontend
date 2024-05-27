import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); // Update state to reflect logout
    window.location.href = "/signin"; // Redirect to sign-in page after sign-out
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Update state based on the token presence
  }, []);

  return (
    <>
      <div className="big-c">
        <div className="c1">
          <a href="" style={{ color: "black", textDecoration: "none" }}>
            InfoGeniusHub
          </a>
        </div>
        <div className="c2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isAuthenticated ? (
              <li>
                <Link to="/upload">Upload Image</Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="c3">
          {!isAuthenticated ? (
            <>
              <button href="" className="login-btn">
                <Link
                  to="/signin"
                  className="link-login"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </button>
              <button href="" className="register-btn">
                <Link
                  to="/signup"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    textDecoration: "none",
                  }}
                >
                  Register
                </Link>
              </button>
            </>
          ) : (
            <button href="" className="login-btn">
              <Link onClick={handleSignOut} className="link-login">
                Logout
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
