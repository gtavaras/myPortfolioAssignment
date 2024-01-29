/*
File name: project.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

/*This section is for import images from the assets file and also import the css file */
import '../src/project.css'
import REPO from '../src/assets/repository.png';
import ERP from '../src/assets/erp.png';
import KPI from '../src/assets/kpi.png';

/*Function Project defines the structure and content of the my Projects page. 
Contains information about 3 projects in which I participated in the past. */
export default function Project() {
     return (
     <>
     <section id="contProject">
          <section className='projectContent'>
               <span className="projectTitle">Some of my projects</span>
               <span className="projectDesc">Explore my portfolio of projects, where passion meets innovation to craft impactful 
               solutions and exceptional experiences. Dive in and get inspired!</span> 
              <br/>
          </section>
          <section className='projectList'>
               <img src={ERP} alt="erp" className="projectIcon" width="100" height="100"/>
               <span className="itemList">
                    <ul>
                         <li>Human Resources Module Development within an ERP: Leader of the Human Resources ERP Implementation Team,
                             overseeing the integration of employee registration, vacation management, monthly payroll development,
                              and other related processes</li>
                    </ul>
                </span>
          </section>
          <section className='projectList'>
               <img src={REPO} alt="repository" className="projectIcon" width="100" height="100"/>
               <span className="itemList">
                    <ul>
                         <li>Customer Datawarehouse implementation: Led the establishment of a unified customer database, 
                            serving as the backbone for analytical processes and segmentation. </li>
                    </ul>
                </span>
          </section>
          <section className='projectList'>
               <img src={KPI} alt="reporting" className="projectIcon" width="100" height="100"/>
               <span className="itemList">
                    <ul>
                         <li>Key Performance Indicators (KPI) dashboard:  Development of the corporate control panel unifying 
                            definitions and consolidating information from all the clinics, for decision making.</li>
                    </ul>
                </span>
          </section>
    </section>
    </>
     );
 }
    