import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'
const NavBar = () => {
  return (
    <nav>
        <ul className='nav__links'>
            <li className='links'>
                <a href='#about'>Conocenos</a>
            </li>
            <li className='links'>
                <a href='#projects'>Projectos</a>
            </li>
            <li className='nav__logo'>
                <img src={logo} alt='logo'/>
                <h1>An Anasha</h1>
                <p>Decoraciones</p>
            </li>
            <li className='links'>
                <a href='#services'>Galeria</a>
            </li>
            <li className='links'>
                <a href='#contacts'>Contactos</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar