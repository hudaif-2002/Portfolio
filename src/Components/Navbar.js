import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';//Link from 'react-router-dom' for creating navigation links

import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar"); //Selects all elements with the class "bar" and stores them in the bar variable.
        var ham=document.getElementsByClassName("NavbarLinks");//Selects all elements with the class "NavbarLinks" and stores them in the ham variable.
 //Toggles the classes "barOne," "barTwo," and "barThree" on the elements with the class "bar". 
//This likely creates a visual effect, such as turning the hamburger icon into an "X" when the menu is shown.
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
// Toggles the class "showNavbar" on the elements with the class "NavbarLinks".
// This class likely controls the visibility or positioning of the navigation links when the menu is shown.
        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
         // Remove classes to reset the visual effect
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree"); 
        // Remove class to hide the NavbarLinks
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>HA</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul  className='NavbarLinks'>
            <li onClick={showMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li onClick={showMenu}><Link to="/About"><BsPerson/> About</Link></li>
            <li onClick={showMenu}><Link to="/Project"><BsCodeSlash/> Project</Link></li>
            <li onClick={showMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li>
        </ul>
        
    </nav>
  )
}

export default Nav