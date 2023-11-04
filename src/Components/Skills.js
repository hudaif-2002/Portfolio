import React from 'react'; 
import {FaReact, FaJava, FaGitAlt, FaGithub, FaNpm, FaFigma, FaHtml5,FaCss3} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import { SiMongodb, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        HTML: <FaHtml5/>,
        CSS:<FaCss3/>,
        Java: <FaJava/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Figma : <FaFigma/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
