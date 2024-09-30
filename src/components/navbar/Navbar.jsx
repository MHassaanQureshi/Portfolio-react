import Style from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
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
          <h1>HS</h1>
        </div>
        <div className={Style.part2}>
          <ul className={Style.links}>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <a href="/M.Hassaan.Resume.pdf" download="M.hassaan.pdf">
            <button>Resume</button>
                </a>
          </ul>
          {/* Menu icon */}
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
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
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
