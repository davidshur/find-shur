import React from 'react';
import Landing from '../Landing';
import Navigation from '../Navigation';
import './style.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navigation />
      <div title="About" id="about">
      </div>
      <div title="Projects" id="projects">
      </div>
      <div title="Contact" id="contact">
      </div>
    </div>
  );
}

export default App;
