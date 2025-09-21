import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App bg-black text-gray-400 min-h-screen font-wholefont">
      <div className="container mx-auto">
        <Navbar />
        <div className="pt-20">
          <Header />
          <Work />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
