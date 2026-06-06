import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>HUDAIF AHAMED</b></h1>
          <Typed />
        </div>
        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

<div className='AboutPage'>
  <div className='AboutText'>
    <h1 className='AboutTextHeading'>
      .NET Developer with 2 years of experience
    </h1>
    <p>
      I build and maintain scalable backend systems for Nordic energy companies at EG India. 
      I specialize in <b>C#</b>, <b>ASP.NET Core</b>, <b>Entity Framework Core</b>, 
      <b>Azure Services</b> like (Container Apps, Key Vault, Application Insights and many more), and <b>PostgreSQL</b>.
      <br /><br />
At EG India, I’ve worked on a couple of projects related to the Electricity market and invoice processing. 
  These microservices handle high volumes of invoices during peak periods, with a strong focus on reliability, 
  observability, and clean architecture. 
  <br /><br />
  I’ve implemented secure identity solutions using <b>Keycloak & OAuth2</b>, 
  centralized logging with <b>Serilog</b>, and monitoring via Application Insights.
      <br /><br />
      I’m passionate about writing maintainable code, designing resilient systems, 
      and continuously learning new technologies.  
    </p>
  </div>
  <Tilt>
    <img className='Avatar' src={Avatar} alt="Avatar" />
  </Tilt>
</div>
    </div>
  );
};

export default Home;