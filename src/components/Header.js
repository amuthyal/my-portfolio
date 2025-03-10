import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import resume from "../assets/resume.pdf";
import "../styles/Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu & disable scrolling when open
  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.classList.add("menu-open"); // Prevent scrolling
    } else {
      document.body.classList.remove("menu-open"); // Allow scrolling
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isVisible ? "show" : "hide"}`}>
      <nav className="nav-container">
        {/* Desktop & Mobile Navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
          <li>
            <a href={resume} download className="resume-btn" onClick={toggleMenu}>Resume</a>
          </li>
        </ul>

        {/* ✅ Hamburger Icon for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="close-icon" /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
