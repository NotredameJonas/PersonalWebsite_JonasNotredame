import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
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