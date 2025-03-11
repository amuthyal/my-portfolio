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
      <h1>Hi, my name is</h1>
      <h3>Akhila Muthyala</h3>
      <p className="intro-text">
        I'm an experienced full-stack developer, and I'm passionate about 
        building <span className="highlight">high-performance, AI-enhanced applications</span> 
        that drive engagement and efficiency.
      </p>
    </section>
  );
};

export default Intro;
