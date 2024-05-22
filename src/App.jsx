import { useState } from "react";
import { BackgroundBeamsDemo } from "./components/BackgroundBeansDemo";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { BackgroundGradientDemo } from "./components/BackgroundGradientDemo";
function App() {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      <About />
      <Skills />
      <BackgroundGradientDemo />
      <Footer />
    </div>
  );
}

export default App;
