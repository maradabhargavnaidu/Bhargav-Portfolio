import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
