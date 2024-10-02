import About from "../components/about-card/About"
import Contact from "../components/contact-section/Contact"
import Landing from "../components/landingName/Landing"
import Navbar from "../components/navbar/Navbar"
import Portfolio from "../components/portfolio-section/Portfolio"
import Skills from "../components/skills-section/Skills"

const Home = () => {
  return ( 
    <>
    <Navbar />
    <Landing />
    <About />
    <Skills/>
    <Portfolio />
    <Contact />
    </>
  )
}

export default Home