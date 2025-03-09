import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="text-gray">Feel free to reach out to me!</p>
      <a href="mailto:your.email@example.com" className="contact-btn">Say Hello</a>
    </section>
  );
};

export default Contact;
