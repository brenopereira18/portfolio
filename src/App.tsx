import { useEffect } from "react";

import About from "./container/About";
import Header from "./container/Header";
import Home from "./container/Home";
import Project from "./container/Projects";
import TechnicalSkills from "./container/TechnicalSkills";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./container/Footer";

import { GlobalStyle } from "./style";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <TechnicalSkills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
