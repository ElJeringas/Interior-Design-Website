import React from 'react';
import './About.css';
import aboutMe from '../../assets/about.jpg'
const About = () => {
  return (
    <section className='section__container about__container' id='about'>
        <div className='about__content'>
            <p>
                Porque sabemos la importancia de cuidar tu entorno fisico y mental .
            </p>
            <h4>
                Un espacio de armonia puede transformar tu vida y tu mejorar tu productividad.
            </h4>
            <p>
                Te ayudamos a redisenar tu casa, negocio, restaurante, y transformarlo
                en lugar armonioso y lleno de vida. <br/> <br/>Una plantita a la vez.
            </p>
        </div>
        <div className='about__image'>
            <img src={aboutMe} alt='about'/>
        </div>
    </section>
  )
}

export default About