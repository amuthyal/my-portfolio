import React from "react";
import "../App.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Where I’ve Worked Recently</h2>
      <div className="experience-container">
        
        {/* Job 1 */}
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <h4>Company Name 1</h4>
          <p>Jan 2022 - Present</p>
          <ul>
            <li>Developed scalable web applications using React and GraphQL.</li>
            <li>Optimized performance and implemented CI/CD pipelines.</li>
            <li>Led front-end development, ensuring best UI/UX practices.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="experience-item">
          <h3>Full-Stack Developer</h3>
          <h4>Company Name 2</h4>
          <p>Aug 2019 - Dec 2021</p>
          <ul>
            <li>Built and maintained enterprise-level applications.</li>
            <li>Worked with Angular, Node.js, and AWS for cloud integration.</li>
            <li>Collaborated with teams to improve workflow automation.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
