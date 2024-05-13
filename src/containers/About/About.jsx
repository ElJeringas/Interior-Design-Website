import React from 'react';
import './About.css';
import aboutMe from '../../assets/about.jpg'
const About = () => {
  return (
    <section className='section__container about__container'>
        <div className='about__content'>
            <p>
                Irure reprehenderit commodo magna incididunt ex mollit adipisicing eu in duis cupidatat.
                Velit irure commodo qui velit nulla ipsum in.
                Anim adipisicing proident do dolor.
            </p>
            <h4>
                Laborum est ullamco quis proident quis mollit irure ad anim aute ad aliquip aute eiusmod.
            </h4>
            <p>
                Mollit nisi do sit id esse eu elit.Aliquip duis proident sint dolor.
                Veniam esse ipsum consequat et occaecat excepteur eu consequat mollit exercitation ad nulla.
            </p>
        </div>
        <div className='about__image'>
            <img src={aboutMe} alt='about'/>
        </div>
    </section>
  )
}

export default About