import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.webp" alt="ExpertMatch Logo" height="40" />
        </a>
        <div className="ml-auto">
          <a href="/login" className="btn btn-dark">Login</a>
          <a href="/signup" className="btn btn-secondary">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;