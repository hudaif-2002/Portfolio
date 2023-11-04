import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Hudaif Ahamed</h4>
      <h4>Copyright &copy; 2023 HA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/hudaif-2002" target='_blank'><FaGithub/></a>
        {/* The target='_blank' attribute ensures that the link opens in a new tab */}
        <a href="https://www.linkedin.com/in/hudaif-ahamed-7b50a2252/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hudaifahamed08@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer