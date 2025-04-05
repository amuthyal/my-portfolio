import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/Featured.css";

const FeaturedItem = ({ project, reverse }) => {
  return (
    <motion.div
      className={`featured-project ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="project-image">
        <img src={project.image} alt={`${project.title} Preview`} />
      </div>

      <div className="project-info">
        {project.tags && (
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-badge">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="project-label">Featured Project</p>
        <h3 className="project-title">{project.title}</h3>

        <div className="project-description">{project.description}</div>

        <ul className="project-tech">
          {project.tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedItem;
