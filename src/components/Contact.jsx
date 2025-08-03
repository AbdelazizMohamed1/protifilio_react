import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:ae1744@fayoum.edu.eg">ae1744@fayoum.edu.eg</a>
        <a href="https://www.linkedin.com/in/abdelaziz-mohamed-761629217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/AbdelazizMohamed1" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <a href="https://wa.me/+201060142496" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
      </div>
    </section>
  );
};

export default Contact;