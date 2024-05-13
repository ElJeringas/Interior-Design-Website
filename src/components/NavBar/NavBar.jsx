import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'
const NavBar = () => {
  return (
    <nav>
        <ul className='nav__links'>
            <li className='links'>
                <a href='#about'>About</a>
            </li>
            <li className='links'>
                <a href='#projects'>Projects</a>
            </li>
            <li className='nav__logo'>
                <img src={logo} alt='logo'/>
                <h1>An Anasha</h1>
                <p>Decorations</p>
            </li>
            <li className='links'>
                <a href='#services'>Services</a>
            </li>
            <li className='links'>
                <a href='#contacts'>Contacts</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar