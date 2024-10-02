import Home from "./landing-page/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/about-card/About";
import Skills from "./components/skills-section/Skills";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
