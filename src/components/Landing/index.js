import React from 'react';
import { Link } from 'react-scroll';
import './style.css';

const Landing = () => (
  <header className="App-header" name="landing">
    <p>Hi, I'm <span className="my-name">David Shur</span>.</p>
    <p>I'm a full-stack web developer.</p>
    <Link
      className="button"
      duration={500}
      offset={-70}
      smooth={true}
      spy={true}
      to="about"
    >
      LEARN MORE
    </Link>
  </header>
);

export default Landing;