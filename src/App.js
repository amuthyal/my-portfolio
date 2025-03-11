import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Sidebar from "./components/Sidebar"; // ✅ Sidebar is always outside the loading condition
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./components/Loading"; // ✅ Import Loading Component
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  // ✅ Hide loading after animation
  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <>
      {/* ✅ Sidebar is always visible, independent of Loading */}
      <Sidebar /> 

      {/* ✅ Show loading first, then the page */}
      {loading ? (
        <Loading onFinish={handleLoadingFinish} /> // ✅ Pass `onFinish` prop
      ) : (
        <div className="content fade-in">
          <Header />
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
