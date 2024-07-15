import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Contact_AppDesc : " ",
    Contact_AppGithub : "https://github.com/hudaif-2002/Contact_App",
    Contact_AppWebsite : "https://contacts-storing-website.netlify.app/",

    E_BharatDesc : " ",
    E_BharatGithub : "https://github.com/hudaif-2002/Ecommerce",
    E_BharatWebsite : "https://ecommerce-alpha-sage-38.vercel.app/",

    Restaurant_ReservationDesc:" ",
    Restaurant_ReservationGithub:"https://github.com/hudaif-2002/Restaurant_Reservation",
    Restaurant_ReservationWebsite:"https://mern-stack-restaurant-reservation.vercel.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox