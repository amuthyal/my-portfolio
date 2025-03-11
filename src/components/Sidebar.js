import React from "react";
import "../styles/Sidebar.css";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = ({ isMobileView }) => {
  return (
    <div className={`sidebar ${isMobileView ? "mobile-sidebar" : "desktop-sidebar"}`}>
      <a href="https://github.com/amuthyal" target="_blank" rel="noopener noreferrer">
        <FaGithub className="sidebar-icon" />
      </a>
      <a href="https://www.instagram.com/akreddy07/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="sidebar-icon" />
      </a>
      <a href="https://www.linkedin.com/in/akhila-muthyala-48b776209/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="sidebar-icon" />
      </a>
      <a href="mailto:muthyala.akhila07@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="sidebar-icon" />
      </a>
    </div>
  );
};

export default Sidebar;
