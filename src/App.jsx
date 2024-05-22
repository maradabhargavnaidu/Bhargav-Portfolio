import { useState } from "react";
import { BackgroundBeamsDemo } from "./components/BackgroundBeansDemo";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BackgroundGradientDemo } from "./components/BackgroundGradientDemo";
import Work from "./components/Work";
function App() {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      <About />
      <Skills />
      <Work />
      <BackgroundGradientDemo />
      <Footer />
    </div>
  );
}

export default App;
