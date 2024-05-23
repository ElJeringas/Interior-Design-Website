import React from 'react';
import './Projects.css';
import display_1 from '../../assets/display-1.jpg';
import display_2 from '../../assets/display-2.jpg';
import display_3 from '../../assets/display-3.jpg';
import display_4 from '../../assets/display-4.jpg';
import display_5 from '../../assets/display-5.jpg';

const Projects = () => {
  return (
    <section className='section__container display__container'>
        <div className='display__col'>
            <img src={display_1} alt='display'/>
            <div className='display__content'>
                <p>View our</p>
                <h4>Portfolio</h4>
            </div>
            <img src={display_2} alt='display'/>
        </div>
        <div className='display__col'>
            <div className='display__content'>
                <p>About Us</p>
                <h4>Who we are</h4>
            </div>
            <img src={display_3} alt='display'/>
            <div className='display__content'>
                <p>Services</p>
                <h4>What we do</h4>
            </div>
        </div>
        <div className='display__col'>
            <img src={display_4} alt='display'/>
            <div className='display__content'>
                <p>Contact us</p>
                <h4>Message</h4>
            </div>
            <img src={display_5} alt='display'/>
        </div>
    </section>
  )
}

export default Projects