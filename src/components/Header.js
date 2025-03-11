import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import "../styles/Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const lastScrollY = useRef(0);

  // ✅ Detect Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Ensure Header Stays Visible on Desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen && isMobile) {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false); // Hide header on scroll down
        } else {
          setIsVisible(true); // Show header on scroll up
        }
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, isMobile]);

  // ✅ Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);

    if (!menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header className={`header ${isVisible || !isMobile ? "show" : "hide"}`}>
      <nav className="nav-container">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
          <li>
            <a href={resume} download className="resume-btn" onClick={toggleMenu}>Resume</a>
          </li>
        </ul>

        {/* ✅ Ensure Hamburger Menu Only Appears on Mobile */}
        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="close-icon" /> : <FaBars />}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
