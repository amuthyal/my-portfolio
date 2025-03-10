import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRegFolder } from "react-icons/fa"; 
import "../styles/Projects.css";

const projects = [
  {
    title: "Amazon Recommender System",
    description: "Designed a recommender system based on the product review data collected from http://jmcauley.ucsd.edu/data/amazon/",
    techStack: ["HTML", "CSS", "D3", "Lucene", "Latent Dirichlet Allocation", "Java", "Data Visualization"],
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description: "Collected the data from the wearable Faros ECG sensor and processed it for the determination of heart rate to predict bradycardia.",
    techStack: ["MATLAB", "Python", "Machine Learning", "k-means clustering", "standard RPeak_detection", "Data Analysis", "Data Mining"],
  },
  {
    title: "Secure Banking System",
    description: "Designed a secure banking web application that provides secure banking transactions and user account management. The system is implemented to minimize the vulnerabilities and maximize security",
    techStack: ["Java", "Spring MVC", "MySQL"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="carousel">
        {/* Left Arrow */}
        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        {/* Project Card */}
        <div className="project-slide">
          <div className="project-content">
            {/* Larger Folder Icon in the Top Left */}
            <div className="folder-icon">
              <FaRegFolder />
            </div>

            {/* Project Title */}
            <h3 className="project-title">{projects[currentIndex].title}</h3>

            {/* Project Description */}
            <p className="project-description">{projects[currentIndex].description}</p>

            {/* Technology Stack */}
            <div className="tech-stack">
              {projects[currentIndex].techStack.map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
