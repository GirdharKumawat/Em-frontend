import React from "react";
import Navbar from "./navbar";  // Corrected path
import Header from "./header";  // Corrected path
import HowItWorks from "./HowitWorks";  // Ensure the filename matches

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
    </>
  );
};

export default App;
