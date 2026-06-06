import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Hudaif Ahamed</h4>
      <h4>&copy; 2024 - 2026 Hudaif Ahamed. All Rights Reserved.</h4>
      
      <div className='footerLinks'>
        <a 
          href="https://github.com/hudaif-2002" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/hudaif-ahamed-7b50a2252/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:hudaifahamed08@gmail.com" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Send Email"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;