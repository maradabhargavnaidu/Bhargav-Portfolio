import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
