import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Default credentials for testing
    const defaultEmail = "admin@example.com";
    const defaultPassword = "password123";

    if (email === defaultEmail && password === defaultPassword) {
      alert("Login successful!");
      setTimeout(() => {
        navigate("/expert");
      }, 1000);
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup" style={{ color: "#000", textDecoration: "underline" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;