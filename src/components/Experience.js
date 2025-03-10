import React, { useState } from "react";
import "../styles/Experience.css";

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "PwC - Contract",
    duration: "Sep 2021 – Present",
    location: "Tampa, Florida - Remote",
    responsibilities: [
      "Contributed to the development of the Astro app for PwC, working with a team of 20 engineers to integrate the app with firm systems for calendar tracking, timesheets, benefits, and goal management.",
      "Developed a marketplace dashboard using Angular and Node.js, featuring a dynamic carousel of opportunities generated in real-time based on API results.",
      "Engineered robust back-end services using Node.js and Express, implementing GraphQL APIs for efficient data querying and improving response times for complex requests by 25%.",
      "Enhanced PwC's chatbot efficiency by integrating it with Amazon Kendra and optimizing prompt analysis using Dialogflow, resulting in a 15% increase in user interactions and improved response accuracy.",
      "Developed batch processing workflows using AWS Lambda to enhance scalability and flexibility."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "CRMC - Contract",
    duration: "Nov 2019 - Sep 2021",
    location: "Carrollton, Texas",
    responsibilities: [
      "Contributed in the development of an EHR application, enhancing order accuracy by 15% and reducing administrative errors by 5%. Streamlined workflows for 300+ healthcare providers, improving patient care and operational efficiency.",
      "Architected and integrated medical procedure data from Carevue with billing systems in the Revenue Cycle Management (RCM) department, enhancing data flow and increasing billing accuracy by 7%. Reduced billing errors by 4% and cut claim processing time by 10%.",
      "Designed and implemented scalable back-end services using Node.js and Express, optimizing API performance and facilitating seamless data exchange across healthcare systems."
    ]
  }
];

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experienceData[0]); // Default to first job

  return (
    <section id="experience">
      <h2 className="section-title">Where I’ve Worked</h2>
      <div className="experience-layout">
        
        {/* Sidebar with Company Names */}
        <div className="experience-sidebar">
          {experienceData.map((job) => (
            <button
              key={job.id}
              className={`sidebar-item ${selectedJob.id === job.id ? "active" : ""}`}
              onClick={() => setSelectedJob(job)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Work Details Frame */}
        <div className="experience-content">
          <h3>{selectedJob.title}</h3>
          <h4>{selectedJob.company}</h4>
          <p>{selectedJob.duration} - {selectedJob.location}</p>

          {/* Responsibilities Section */}
          <ul>
            {selectedJob.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
