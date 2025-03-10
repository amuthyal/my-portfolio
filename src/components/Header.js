import React from "react";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"; // Import the resume file
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
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
