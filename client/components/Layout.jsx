/*
File name: Layout.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../src/assets/Logo.png';

/* Function Layout defines the structure of the page, including the logo and the navigation bar with links to different sections.*/
export default function Layout() 
{
 return (
 <>

 <nav>
    <div className='logo'> 
        <Link to ="/"><img src = {LOGO} alt = "My Logo" className = "logo" width = "100px" height= "70px"/>  </Link>        
    </div>
    <div className='links-navegacion'>
    <Link to="/">Home</Link><Link to="/about">About me</Link> <Link to="/project">Projects</Link><Link to="/service">Services</Link> <Link to="/contact">Contact me</Link>
    </div>       
</nav>
<hr />
 </>
 );
}
