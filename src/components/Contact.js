import React from "react";
import "../styles/Contact.css";
import Sidebar from "./Sidebar"; // Import Sidebar


const Contact = () => {
  return (
    <section id="contact">
      <p className="contact-heading">04. What's Next?</p>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        I'm actively exploring new opportunities and always open to connecting!
        Feel free to reach out if you have any full-time opportunities, questions, or just want to say hello—
        I’ll do my best to respond!
      </p>
      <a href="mailto:muthyala.akhila07@gmail.com" className="contact-button">
        Say Hello
      </a>
       {/* Sidebar now appears below button in mobile */}
       <Sidebar />
    </section>
  );
};

export default Contact;
