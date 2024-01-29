/*
File name: service.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

/*This section is for import images from the assets file and also import the css file */
import '../src/service.css'
import CSHARP from '../src/assets/csharp.png';
import SQL from '../src/assets/sql.png';
import AGILE from '../src/assets/agile.png';
import JAVA from '../src/assets/java.png';

/*Function Service defines the structure and content of the my Services page. 
Contains information about all my skills, therefore services I can perform. */
export default function Service(){
     return (
     <>
     <section id="contService">
        <section className='serviceContent'>
            <br/>
            <span className="serviceDesc">"I am ready to bring your ideas to life. Specializing in application development and 
                project implementation using Agile methodology, I offer tailored solutions that embody innovation and efficiency.
                Let's collaborate to turn your vision into a reality, embracing the future of development together."</span> 
            <br/>
            <span className="serviceTitle">My services</span>
        </section>

        <section className='contServiceList'>
            <img src={CSHARP} alt="C programming" className="serviceIcon" width="60" height="50"/>
            <img src={SQL} alt="sql programming" className="serviceIcon" width="50" height="50"/>
            <img src={AGILE} alt="agile" className="serviceIcon" width="50" height="50"/>
            <img src={JAVA} alt="java programming" className="serviceIcon" width="50" height="50"/>
               <span className="serviceList">
                    <ul>
                        <li>Software development methodology: Agile.</li>
                         <li>Progamming Languages: C++, C#, Java</li>
                         <li>Database Languages: SQL Server, MongodDB, PHP</li>
                    </ul>
                </span>
        </section>
    </section>
    </>
    );
 }
    