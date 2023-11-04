import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Hudaif Ahamed</b> and I am from Mangalore, India.
            I love to work on both <b>Web development</b> as well as <b>App development</b>. I am a final year college student pursuing <b>BE in CSE</b>. <br/><br/>
            I have done an internship as a <b>Frontend developer</b> at Exelon Circuits.
            I love to learn new things and upgrade myself. you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            </p>
        </div>

        <div>
          <Tilt>
              <Lottie className="illustration" animationData={Coder} loop={true} />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Technical Skills</h1>
      <div className='skills'>
        <Skills skill='Java' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Javascript' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        </div>
     
        <h1 className='SkillsHeading'>Basic Skills</h1>
        <div className='skills'>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        
      </div>
    </>
  )
}

export default About