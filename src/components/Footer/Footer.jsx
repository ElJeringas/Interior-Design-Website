import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='section__container footer__container'>
            <img src={logo} alt='footer logo'/>
            <h4>An Anasha<br/>Adornos y recuerdos para toda ocacion y momento.</h4>
            <p>Siguenos en nuestras redes sociales.</p>
            <button>Contactos</button>
        </div>
        <div className='footer__bar'>
            <p>©️ 2024 Digital Canvas</p>
        </div>
    </footer>

  )
}

export default Footer