import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        // Authentication successful, handle further actions
        localStorage.setItem("token", response.data.token);
        console.log("Login successful");
        window.location.replace("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again later.");
    }
  };

  return (
    <>
      <div className="Form-container">
        <div className="sub-form-container">
          <h1 className="login-heading">Log In</h1>
          <form onSubmit={handleLogin}>
            <label style={{ color: "grey", fontSize: "1rem" }}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              placeholder="me@example.com"
              autofocus={true}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", height: "35px" }}
            />
            <label
              style={{ color: "grey", fontSize: "1rem", marginTop: "10px" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", height: "35px", marginTop: "5px" }}
            />
            <button
              className="submit-btn"
              type="submit"
              style={{ textDecoration: "none" }}
            >
              Submit
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
