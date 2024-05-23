import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='section__container footer__container'>
            <img src={logo} alt='footer logo'/>
            <h4>Esse sint reprehenderit labore cillum adipisicing id irure.</h4>
            <p>Tempor voluptate nostrud pariatur anim et Lorem pariatur proident in mollit ipsum.</p>
            <button>Contact Us</button>
        </div>
        <div className='footer__bar'>
            <p>©️ 2024 Digital Canvas</p>
        </div>
    </footer>

  )
}

export default Footer