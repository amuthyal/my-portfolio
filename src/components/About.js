import React from "react";
import "../styles/About.css";
import profileImg from "../Images/profile.jpg"; 

const About = () => {
  return (
    <section id="about">
      {/* ✅ About Me Heading with Line */}
      <div className="about-text">
        <div className="about-header">
          <h2>About Me</h2>
        </div>

        <p>
          With over <span className="highlight">five years of experience</span> in software engineering, 
          I have built a strong foundation in front-end and full-stack development, specializing in modern 
          web technologies such as <span className="highlight">React, Angular, GraphQL, and Node.js</span>.
        </p>
        <p>
          My expertise extends to designing scalable, high-performance applications, optimizing system 
          architecture, and improving development workflows.
        </p>
        <p>
          Additionally, I leverage <span className="highlight">AI and ML tools</span> to enhance software capabilities, 
          integrating intelligent automation and <span className="highlight">natural language processing</span> 
          to improve user experiences and operational efficiency.
        </p>

        {/* Technologies Section */}
        <h3 className="tech-title">Technologies I’ve Been Working With Recently:</h3>
        <div className="tech-container">
          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
          <ul className="tech-list">
            <li>Angular</li>
            <li>Node.js</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      {/* ✅ Image Below in Mobile */}
      <div className="about-image">
        <img src={profileImg} alt="Akhila Muthyala" />
      </div>
    </section>
  );
};

export default About;
