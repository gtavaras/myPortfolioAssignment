/*
File name: about.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

/*This section is for import images from the assets file and also import the css file */
import PHOTO from '../src/assets/photo.png';
import '../src/about.css'

/*Function About defines the structure and content of the About me page. Incudes a brief information about myself and a button that allows the visitor to download my resume. */
export default function About() {
     return (
     <>
     <section id="skill">
          <img src={PHOTO} alt="photo" className="photo" width="400" height="400" />
          <section className='aboutContent'>
               <span className="skillTitle">Gisella Tavara</span>
               <span className="skillDesc">I am a passionate, committed, and customer-focused individual with over thirteen years of 
               experience in companies related to the Telecommunications, Finance, and Health sectors. My focus lies in the continuous 
               pursuit of excellence, paying attention to the details that bring about real changes. Ready to know more? Download 
               my resume and discover my expertise!</span> 
               <span className="skillDesc"> Ready to know more? Download my resume and discover my expertise!</span> 
              
               {/*The button will let the visitor to download my resume.*/}
               <a href="../src/assets/GTS_resume.pdf">
                    <button className="btnAbout">Resume</button>   
                </a> 

          </section>
    </section>
     </>
     );
}
    