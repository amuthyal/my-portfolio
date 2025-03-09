import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="resume-btn">Resume</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
