import React from 'react'
import about from '../../media/aboutImg.jpg';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
    <div className='about-desc'>
            <h3>Passion for software</h3>
            <br/>
            <p>My passion for development has allowed me to design,
             maintain and implement web applications and user interfaces. My focus is on detecting and/or analyzing business 
             requirements to propose solutions that seek to innovate and generate a positive impact on clients.</p>
    </div>
    <div className='about-img'>
        <img src={about} alt='some value'></img>
    </div>
    </div>
  )
}

export default About