import About from "./container/About";
import Header from "./container/Header";
import TechnicalSkills from "./container/TechnicalSkills";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <TechnicalSkills />
    </>
  );
}

export default App;
