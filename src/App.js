import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
