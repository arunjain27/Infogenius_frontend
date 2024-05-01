// About.js
import React from 'react';
import '../css/About.css'; // Importing CSS file for styling
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className='team'>
      <p className='about'>We are a dedicated team of four professionals, each bringing our unique skills and passion to the forefront of technology and innovation. Our mission is to create a website that isn't just functional and reliable, but also a delight to use. We believe that the genius behind InfoGeniushub comes from the collective brilliance of our team members.</p>
</div>     
      <h1>Our Team </h1>
      <div className='team'>
<p><strong>Arun Jain (Full-Stack Developer): </strong></p><p>With a keen eye for system architecture and a passion for scalable solutions, Arun Jain leads our team and handles the complex backend processes. He ensures that InfoGeniushub operates smoothly under the hood, focusing on server-side logic, database management, and application integration.
</p>
<p><strong>Ayush Rawat (Frontend Developer):</strong></p> <p>Ayush Rawat turns concepts into visual masterpieces. Specializing in frontend development, he is responsible for crafting the user interface of InfoGeniushub, ensuring it's not only visually appealing but also intuitive and user-friendly. He's a wizard with frameworks and has a keen eye for detail.
</p>
<p><strong>Abhay Gaur (Backend And M.L Developer): </strong></p> <p>Bridging the gap between frontend and backend, Abhay Gaur works on both sides to ensure seamless integration. His versatility means he's always ready to jump in where he's needed, whether it's tweaking the user interface or fine-tuning our server responses.
</p>
<p><strong>Bhanu Pratap Yadav (Frontend Developer): </strong></p> <p>Bhanu Pratap Yadav is our Frontend Developer. Not a single line of code gets past without her meticulous testing and review. She ensures that InfoGeniushub is not only bug-free but also offers a smooth, error-free experience for our users. Her dedication to quality means every feature is user-tested and polished.
</p>

</div>  
   
   
   
   <div className='footer'> <Footer/></div>
 
    </div>
  );
};

export default About;
