import React from 'react';
import { Link } from 'react-scroll';
import './style.css';

const Navigation = () =>(
  <nav className="nav" id="navbar">
    <div className="nav-content">
      <ul>
        <Link
          activeClass="active"
          className="nav-link"
          duration={500}
          offset={-70}
          smooth={true}
          spy={true}
          to="landing"
        >
          <li>
            HOME
          </li>
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          duration={500}
          offset={-70}
          smooth={true}
          spy={true}
          to="about"
        >
          <li>
            ABOUT
          </li>
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          duration={500}
          offset={-70}
          smooth={true}
          spy={true}
          to="portfolio"
        >
          <li>
            PORTFOLIO
          </li>
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          duration={500}
          offset={-70}
          smooth={true}
          spy={true}
          to="contact"
        >
          <li>
            CONTACT
          </li>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Navigation;