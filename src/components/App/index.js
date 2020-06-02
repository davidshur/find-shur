import React from 'react';
import Landing from '../Landing';
import Navigation from '../Navigation';
import './style.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navigation />
      <div id="about">
      </div>
      <div id="projects">
      </div>
      <div id="contact">
      </div>
    </div>
  );
}

export default App;
