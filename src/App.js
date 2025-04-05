import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Sidebar from "./components/Sidebar"; // ✅ Sidebar is always outside the loading condition
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Loading from "./components/Loading"; // 
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Simulate loading animation, then show content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ✅ Sidebar is always visible, independent of Loading */}
      <Sidebar /> 

      {/* ✅ Show loading first, then the page */}
      {loading ? (
        <Loading />
      ) : (
        <div className="content fade-in">
          <Header />
          <Intro />
          <About />
          <Featured /> 
          <Experience />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
