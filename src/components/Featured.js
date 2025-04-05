import React from "react";
import FeaturedItem from "./FeaturedItem";
import previewPortfolio from "../Images/preview-desktop.png";
import previewNote from "../Images/preview.png";
import previewF1 from "../Images/driver-chart.png";
import "../styles/Featured.css";

const projects = [
  {
    title: "Portfolio Project",
    description:
      "A fully responsive, modern portfolio website built with React.js, showcasing experience, projects, skills, certifications, and contact info — with smooth scroll-based transitions and a mobile-first design.",
    image: previewPortfolio,
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
    tags: ["Web App"],
  },
  {
    title: "Smart Note App",
    description:
      "A clean, AI-powered note-taking web app built with React, Firebase, and OpenAI GPT-3.5. Create, edit, summarize, and search notes with a simple, modern interface.",
    image: previewNote,
    github: "https://github.com/amuthyal/smart-note-gpt",
    external: "https://github.com/amuthyal/smart-note-gpt",
    tech: ["React", "TypeScript", "Firebase", "OpenAI GPT-3.5", "CSS", "Vite"],
    tags: ["AI", "Web App"],
  },
  {
    title: "🏎️ F1 Analytics Predictor",
    description:
      "An interactive web app to predict Formula 1 podium finishes and visualize driver & team performance using real-time and historical data.",
    image: previewF1,
    github: "https://github.com/amuthyal/f1-analytics-predictor",
    external: "https://github.com/amuthyal/f1-analytics-predictor",
    tech: ["React", "Axios", "FastF1 API", "LightGBM", "Flask", "Python"],
    tags: ["ML", "Data Viz", "Web App"],
  },
];

const Featured = () => {
  return (
    <section id="featured" className="featured-section">
      <h2 className="section-heading">Some Things I’ve Built</h2>

      {projects.map((project, index) => (
        <div className="featured-wrapper" key={index}>
          <FeaturedItem project={project} reverse={index % 2 !== 0} />
        </div>
      ))}
    </section>
  );
};

export default Featured;
