/*
File name: Home.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

import { Link } from 'react-router-dom';
import '../src/home.css'

/* Function Home defines the structure of the home section for myProfile website. Includes an action button linking to Contact page*/
export default function Home() {
    return <>
    <section id="intro">
          <div className="introContent">
               <span className="introName">Gisella Tavara</span> 
               <br/>
               <span className="introText">IT Consultant</span>
               <br/>
               <span className="introSlogan"> "Elevating my Profession, Ignited by my Passion" </span>
               <br/>
               
          </div>
          
          <div className="btnContact">
               <Link to="/Contact"> Contact me</Link> 
          </div>
          
     </section>
     </>
 }
