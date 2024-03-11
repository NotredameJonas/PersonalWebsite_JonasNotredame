import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
        <img className='letter_j' src={require('../../assets/images/letter_j.png')} alt='letter_j' />
        <nav>
            <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;