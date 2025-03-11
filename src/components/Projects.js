import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaRegFolder } from "react-icons/fa"; 
import useSectionObserver from "../hooks/useSectionObserver";
import "../styles/Projects.css";

const projects = [
  {
    title: "Amazon Recommender System",
    description: "Designed a recommender system based on product review data from Amazon.",
    techStack: ["HTML", "CSS", "D3", "Lucene", "LDA", "Java", "Data Visualization"],
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description: "Collected ECG sensor data and processed it to predict bradycardia.",
    techStack: ["MATLAB", "Python", "Machine Learning", "k-means", "RPeak Detection"],
  },
  {
    title: "Secure Banking System",
    description: "Developed a secure banking web app for safe transactions & account management.",
    techStack: ["Java", "Spring MVC", "MySQL"],
  },
];

const Projects = () => {
  const { ref, inView } = useSectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Detect Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" ref={ref} className={`projects-section ${inView ? "visible" : ""}`}>
      <h2 className="section-title">Projects</h2>

      {/* ✅ Mobile View: Show All Projects Stacked */}
      {isMobile ? (
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="folder-icon">
                <FaRegFolder />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ✅ Desktop View: Carousel */
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
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="arrow right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
