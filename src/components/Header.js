import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import "../styles/Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const lastScrollY = useRef(0);

  // ✅ Detect Screen Resize
  useLayoutEffect(() => {
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
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  // ✅ Scroll to Section with Smooth Animation
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // ✅ Ensure section becomes visible in case of animation
      setTimeout(() => {
        section.classList.add("visible");
      }, 500);
    }
    if (isMobile) toggleMenu();
  };

  return (
    <header className={`header ${isVisible || !isMobile ? "show" : "hide"}`}>
      <nav className="nav-container">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
    <a href="#featured" onClick={(e) => handleScroll(e, "featured")}>
      Featured
    </a>
  </li>
          <li>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href={resume} download className="resume-btn" onClick={toggleMenu}>
              Resume
            </a>
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
