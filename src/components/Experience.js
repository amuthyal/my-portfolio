import React, { useState, useEffect } from "react";
import "../styles/Experience.css";

const experienceData = [
  {
    company: "PwC",
    title: "Full Stack Developer",
    duration: "Sept 2021 - Present",
    responsibilities: [
      "Integrating the app with firm-wide systems for calendar tracking, timesheets, and goal management, improving operational efficiency by 15%.",
      "Designed and implemented automated testing strategies to maintain high code quality and reduce production bugs by 20%.",
      "Developed reusable React components following component-based architecture, improving maintainability and development speed by 30%.",
      "Optimized front-end performance by 30%, leveraging best practices such as lazy loading, code splitting, and memoization.",
      "Integrated GraphQL APIs with React-based front-end, improving data-fetching efficiency by 25%.",
    ],
  },
  {
    company: "CRMC",
    title: "Full Stack Developer",
    duration: "Nov 2019 - Sept 2021",
    responsibilities: [
      "Built front-end development for Electronic Health Record system using ReactJS and TypeScript, enhancing usability and reducing page load times by 30%.",
      "Built responsive, accessible UI components, ensuring cross-device and cross-browser compatibility.",
      "Developed and optimized RESTful and GraphQL APIs, improving data retrieval speeds by 20%.",
      "Integrated Redux for state management, ensuring smooth data flow and UI consistency across the application.",
      "Architected front-end workflows for 300+ healthcare providers, improving order accuracy by 15% and reducing administrative errors by 5%.",
      "Designed secure authentication mechanisms using OAuth 2.0 and role-based access control (RBAC), ensuring HIPAA compliance.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Detect Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="experience">
      {/* ✅ Section Header */}
      <div className="experience-header">
        <h2>Where I've worked recently</h2>
      </div>

      {/* ✅ Mobile Tabs for Navigation */}
      {isMobile && (
        <div className="experience-tabs">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className={`experience-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {job.company}
            </div>
          ))}
        </div>
      )}

      {/* ✅ Desktop Sidebar */}
      {!isMobile && (
        <div className="experience-layout">
          <div className="experience-sidebar">
            {experienceData.map((job, index) => (
              <button
                key={index}
                className={`sidebar-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* ✅ Job Details Section */}
          <div className="experience-content">
            <h3 className="job-title">
              {experienceData[activeIndex].title} @{" "}
              <span className="company-name">{experienceData[activeIndex].company}</span>
            </h3>
            <p className="job-duration">{experienceData[activeIndex].duration}</p>

            <div className="experience-body">
              <ul>
                {experienceData[activeIndex].responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Mobile Job Details (Full Width) */}
      {isMobile && (
        <div className="experience-content mobile-content">
          <h3 className="job-title">
            {experienceData[activeIndex].title} @{" "}
            <span className="company-name">{experienceData[activeIndex].company}</span>
          </h3>
          <p className="job-duration">{experienceData[activeIndex].duration}</p>

          <div className="experience-body">
            <ul>
              {experienceData[activeIndex].responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
