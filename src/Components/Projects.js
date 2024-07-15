import React from 'react';
import ProjectBox from './ProjectBox';
import RR from '../images/Restaurant-Reservation.png';
import EB from '../images/EBharat.png';
import CA from '../images/Contact-App.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RR} projectName="Restaurant_Reservation" />
        <ProjectBox projectPhoto={EB} projectName="E_Bharat" />
        <ProjectBox projectPhoto={CA} projectName="Contact_App" />
      </div>

    </div>
  )
}

export default Projects