import Home from "./landing-page/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/about-card/About";
import Skills from "./components/skills-section/Skills";
import Portfolio from "./components/portfolio-section/Portfolio";
import Contact from "./components/contact-section/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
