import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './style.css';

const Navigation = () =>(
  <nav className="nav" id="navbar">
    <div className="nav-content">
      <ul>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            onClick={scroll.scrollToTop}
            smooth={true}
            spy={true}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            smooth={true}
            spy={true}
            to="about"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            duration={500}
            offset={-70}
            smooth={true}
            spy={true}
            to="portfolio"
          >
            PORTFOLIO
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
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;