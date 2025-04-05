import React from "react";
import { FaRegFolder, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/Projects.css";

const projects = [
  {
    title: "Portfolio Project",
    description:
      "A fully responsive, modern portfolio website built with React.js, showcasing experience, projects, skills, certifications, and contact info — with smooth scroll-based transitions and a mobile-first design.",
    github: "https://github.com/amuthyal/v3-portfolio",
    external: "https://amuthyal.github.io/v3-portfolio/",
    tech: [
      "React.js",
      "Framer Motion",
      "HTML/CSS",
      "React Icons",
      "AWS S3",
      "JavaScript (ES6)",
    ],
  },
  {
    title: "Smart Note App",
    description:
      "A clean, AI-powered note-taking web app built with React, Firebase, and OpenAI GPT-3.5. Create, edit, summarize, and search notes with a simple, modern interface.",
    github: "https://github.com/amuthyal/smart-note-gpt",
    external: "https://github.com/amuthyal/smart-note-gpt",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "OpenAI GPT-3.5",
      "CSS",
      "Vite",
    ],
  },
  {
    title: "🏎️ F1 Analytics Predictor",
    description:
      "An interactive web app to predict Formula 1 podium finishes and visualize driver & team performance using real-time and historical data.",
    github: "https://github.com/amuthyal/f1-analytics-predictor",
    external: "https://github.com/amuthyal/f1-analytics-predictor",
    tech: ["React", "Axios", "FastF1 API", "LightGBM", "Flask", "Python"],
  },
  {
    title: "Amazon Recommender System",
    description:
      "Designed a recommender system based on product review data from Amazon.",
    tech: [
      "HTML",
      "CSS",
      "D3",
      "Lucene",
      "LDA",
      "Java",
      "Data Visualization",
    ],
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description:
      "Collected ECG sensor data and processed it to predict bradycardia.",
    tech: [
      "MATLAB",
      "Python",
      "Machine Learning",
      "k-means",
      "RPeak Detection",
    ],
  },
  {
    title: "Secure Banking System",
    description:
      "Developed a secure banking web app for safe transactions & account management.",
    tech: ["Java", "Spring MVC", "MySQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-top">
              <FaRegFolder className="folder-icon" />
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
