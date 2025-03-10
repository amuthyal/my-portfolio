import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"; // Import the resume file
import "../styles/Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // Store last scroll position

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

  return (
    <header className={`header ${isVisible ? "show" : "hide"}`}>
      <nav>
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          {/* Resume Button */}
          <li>
            <a href={resume} download className="resume-btn">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
