import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button onClick={() => window.open("/resume.pdf")}>Resume</button></li>
      </ul>
    </nav>
  </header>
);

const MainContent = () => (
  <main className="main">
    {/* Introduction Section */}
    <section id="intro">
      <h1>Hi, my name is</h1>
      <h3>Akhila Muthyala</h3>
      <p className="intro-text">
        I'm an experienced full-stack developer, and I'm passionate about 
        building high-performance, AI-enhanced applications that drive 
        engagement and efficiency.
      </p>
    </section>

    {/* About Me Section (Text Left, Image Right) */}
    <section id="about">
      {/* Left Column - Text */}
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          With over <span className="highlight">five years of experience</span> in software engineering, 
          I have built a strong foundation in front-end and full-stack development, specializing in modern 
          web technologies such as <span className="highlight">React, Angular, GraphQL, and Node.js</span>. 
          My expertise extends to designing scalable, high-performance applications, optimizing system 
          architecture, and improving development workflows.
        </p>
        <p>
          I have a deep understanding of software design principles, <span className="highlight">CI/CD automation</span>, 
          cloud services (<span className="highlight">AWS, Azure, GCP</span>), and database management. Passionate about 
          building robust, maintainable solutions, I excel in developing responsive, accessible, and 
          user-centric applications that drive engagement and business success.
        </p>
        <p>
          Additionally, I leverage <span className="highlight">AI and ML tools</span> to enhance software capabilities, 
          integrating intelligent automation and <span className="highlight">natural language processing </span> 
          to improve user experiences and operational efficiency.
        </p>

    {/* Technologies Section */}
    <h3 className="tech-title">Technologies I’ve Been Working With Recently:</h3>
    <div className="tech-container">
      <ul className="tech-list">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
      <ul className="tech-list">
        <li>Angular</li>
        <li>Node.js</li>
        <li>AWS</li>
      </ul>
    </div>
  </div>

      

      {/* Right Column - Image */}
      <div className="about-image">
       {/* <img src="/images/profile.jpg" alt="Akhila Muthyala" /> */}
       <img src="https://via.placeholder.com/300x300" alt="Test Image" />

      </div>
    </section>

    {/* Experience Section */}
    <section id="experience">
      <h2>Experience</h2>
      <p>
        - Developed scalable web applications using React, Angular, and GraphQL.  
        - Implemented CI/CD pipelines to automate deployment.  
        - Designed and optimized cloud-based solutions on AWS, Azure, and GCP.  
      </p>
    </section>

    {/* Projects Section */}
    <section id="projects">
      <h2>Projects</h2>
      <p>
        - <strong>Project 1:</strong> A full-stack e-commerce platform with GraphQL APIs.  
        - <strong>Project 2:</strong> AI-powered chatbot for automated customer support.  
        - <strong>Project 3:</strong> Scalable SaaS application for data analytics.  
      </p>
    </section>

    {/* Contact Section */}
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: akhila@example.com</p>
      <p>LinkedIn: linkedin.com/in/akhila</p>
      <p>GitHub: github.com/akhila</p>
    </section>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Akhila Muthyala</p>
  </footer>
);

export default App;
