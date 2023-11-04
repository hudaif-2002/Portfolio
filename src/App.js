import { Route, Routes } from "react-router-dom";//Route and Routes are imported from 'react-router-dom'. These are components that are used for defining routes in your application.
import { useEffect, useState } from "react";//useEffect and useState are imported from 'react'. These are React hooks used for handling side effects and managing state, respectively.

import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";

import Lottie from  "lottie-react";//Lottie is a React component that allows you to easily integrate Lottie animations into your React application. Lottie is a library that renders Adobe After Effects animations in real-time.
import nightsky from "./LottieFiles/night-sky.json";//nightsky is the imported JSON file that represents the Lottie animation. This file contains the data needed to render the animation.
import HashLoader from "react-spinners/HashLoader";//HashLoader is a spinner component from the 'react-spinners' library. It provides a visually appealing loading spinner that you can use while waiting for data or resources to load.


function App() {

  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
       <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      {/*the Lottie components are used to render animated backgrounds. They are applied with different class names (bg, bgtwo, and bgtemp) and are likely used to create visually appealing animated elements in the background of your web page. */}
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
