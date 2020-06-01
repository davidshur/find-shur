import React from 'react';
import './style.css';

import Button from '../Button';

const Landing = () => (
  <header className="App-header">
    <p>Hi, I'm <span className="my-name">David Shur</span>.</p>
    <p>I'm a full-stack web developer.</p>
    <Button label="LEARN MORE" />
  </header>
);

export default Landing;