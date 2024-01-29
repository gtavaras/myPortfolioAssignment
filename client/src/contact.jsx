/*
File name: contact.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

/*This section is for import images from the assets file and also import the css file */
import '../src/contact.css'
import FACE from '../src/assets/facebook.png';
import INSTA from '../src/assets/instagram.png';
import LINKEDIN from '../src/assets/linkedin.png';

import LOC from '../src/assets/location.png';
import EMAIL from '../src/assets/email.png';
import PHONE from '../src/assets/phone.png';

/*Function Contact defines the structure and content of the Contact page. 
Contains information to contact me.
Incudes a form to input data in case a visitor wants my services or requires further information.
It also includes a button that allows the visitor to submit the form.*/
export default function Contact() {
     return (
     <>
     <section id="cont">
          <span className="contTitle">"Reach out and share your needs."</span>
          <span className="contText">Your message is the key to unlocking personalized solutions. Let's start the conversation for success!</span>
     </section>
     <section className="contactInfo">
          <section className="contactDetail">
               <img src={LOC} alt="location img" className="infoIcon" width="30" height="30"/>
               <span className="contText">Toronto, ON</span>
          </section>
          <section className="contactDetail">
               <img src={EMAIL} alt="email img" className="infoIcon" width="30" height="30"/>
               <span className="contText">gtavaras@my.centennialcollege.ca</span>
          </section>
          <section className="contactDetail">
               <img src={PHONE} alt="phone img" className="infoIcon" width="30" height="30"/>
               <span className="contText">647-525-8030</span>
          </section>
     </section>

     <section id="form">
          <form id="ffp">
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> 
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br />

                    <label htmlFor="myCNumber"> *Contact number: </label>
				<input type="text" id="myCNumber" name="myCNumber" required="required" /> <br />
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br />

                    <label htmlFor="myMessage"> *Message: </label>
				<input type="message" id="myMessage" name="myMessage" required="required" /> <br />

				<input type="submit" className="submit" value="Submit" /> <br />	
                    
	     </form>
          <section id="icons">
               <img src={FACE} alt="facebook logo" className="facebook" width="30" height="30"/>
               <img src={INSTA} alt="instagram logo" className="instagram" width="30" height="30"/>
               <img src={LINKEDIN} alt="linkedin logo" className="linkedin" width="30" height="30"/>
          </section>
     </section>
     
     </>
     );
 }
