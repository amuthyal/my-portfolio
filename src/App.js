import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />  
      <Sidebar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
