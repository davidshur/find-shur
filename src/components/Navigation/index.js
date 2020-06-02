import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import './style.css';

const Navigation = () =>(
  <nav className="nav" id="navbar">
    <div className="nav-content">
      <img
        src={logo}
        className="nav-logo"
        alt="David Shur"
        onClick={scroll.scrollToTop}
      />
      <ul>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            smooth={true}
            spy={true}
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            smooth={true}
            spy={true}
            to="projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            smooth={true}
            spy={true}
            to="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;