import About from "./container/About";
import Header from "./container/Header";
import Project from "./container/Projects";
import TechnicalSkills from "./container/TechnicalSkills";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <TechnicalSkills />
      <Project />
    </>
  );
}

export default App;
