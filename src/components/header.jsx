import React from "react";

const Header = () => {
  return (
    <header className="text-center p-5">
      <h1>Find the Perfect Expert for Your Interview Board</h1>
      <p>Automating expert selection with AI-powered relevance scores</p>
      <a href="/signup" className="btn btn-lg btn-dark mt-3">Get Started</a>
      <br />
      <img
        src="/src/assets/expert_match.png"
        alt="Expert Matching"
        className="img-fluid mt-1"
        style={{ maxWidth: "600px" }}
      />
      <br />
    </header>
  );
};

export default Header;
