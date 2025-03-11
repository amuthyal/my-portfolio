import React, { useEffect, useState } from "react";
import "../styles/Intro.css";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ✅ Trigger fade-in effect when component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <section id="intro" className={`intro-section ${isVisible ? "visible" : ""}`}>
      <div className="intro-content">
        <h1>Hi, my name is</h1>
        <h2 className="intro-name">Akhila Muthyala</h2>
        <h3 className="intro-subtitle">Innovative Developer | AI Enthusiast | Architecting Scalable Solutions</h3>
        <p className="intro-text">
          I'm an experienced full-stack developer, and I'm passionate about 
          building <span className="highlight">high-performance, AI-enhanced applications</span> 
          that drive engagement and efficiency.
        </p>
      </div>
    </section>
  );
};

export default Intro;
