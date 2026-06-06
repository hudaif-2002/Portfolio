import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <b>Hudaif Ahamed</b> – a Software Developer with <b>2 years of experience</b> building
            enterprise .NET microservices for Swedish and Norwegian energy companies at <b>EG India</b>.
            <br /><br />
            I specialise in <b>backend systems</b> – C#, ASP.NET Core (.NET 10), Azure, PostgreSQL, EF Core,
            and secure identity with Keycloak/OAuth2. I also have frontend exposure with <b>Blazor</b>.
            <br /><br />
            I'm passionate about <b>scalable architecture</b>, <b>clean code</b>, and <b>automated CI/CD</b>.
            I’ve deployed microservices to Azure Container Apps with GitHub Actions, achieving 99.2% uptime.
            <br /><br />
            I'm <b>open to work</b> – remote or on-site in India. Connect with me via the footer links.
          </p>
        </div>
        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Coder} loop={true} />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>.NET & Azure Stack</h1>
      <div className='skills'>
        <Skills skill='Csharp' />
        <Skills skill='DotNet' />
        <Skills skill='Azure' />
        <Skills skill='PostgreSQL' />
        <Skills skill='EFCore' />
        <Skills skill='Docker' />
        <Skills skill='GitHubActions' />
      </div>

      <h1 className='SkillsHeading'>Also Familiar With</h1>
      <div className='skills'>
        <Skills skill='Blazor' />
        <Skills skill='React' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Git' />
        <Skills skill='GitHub' />
      </div>
    </>
  );
};

export default About;