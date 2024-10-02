import Style from "./Navbar.module.css";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate('/About'); 
  };
  const handleButtonClick2 = () => {
      navigate('/skills'); 
  };
  const handleButtonClick3 = () => {
      navigate('/portfolio'); 
  };
  const handleButtonClick4 = () => {
      navigate('/contact'); 
  };

  // State to track mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={Style.container}>
        <div className={Style.part1}>
          <h1>HQ</h1>
        </div>
        <div className={Style.part2}>
          <ul className={Style.links}>
            <li onClick={handleButtonClick}>About</li>
            <li onClick={handleButtonClick2}>Skills</li>
            <li onClick={handleButtonClick3}>Portfolio</li>
            <li onClick={handleButtonClick4}>Contact</li>
            <li><a href="/M.Hassaan.Resume.pdf" download="M.hassaan.pdf">
            <button>Resume</button>
                </a>
          </li>
           
          </ul>
          
          <img
            src="/images/menu (3).png"
            alt="Menu"
            onClick={toggleMenu} // Click event to toggle the menu
          />
        </div>
      </nav>

      {/* Mobile menu, controlled by state */}
      <nav className={`${Style.container2} ${isMenuOpen ? Style.showMenu : "display:block"}`}>
        <div className={Style.part4}>
          <ul className={Style.links1}>
            <li onClick={handleButtonClick}>About</li>
            <li onClick={handleButtonClick2}>Skills</li>
            <li onClick={handleButtonClick3}>Portfolio</li>
            <li onClick={handleButtonClick4}>Contact</li>
            <a href="/M.Hassaan.Resume.pdf" download="M.hassaan.pdf">
            <button>Resume</button>
                </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
