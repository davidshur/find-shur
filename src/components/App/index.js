import React from 'react';
import About from '../About';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Portfolio from '../Portfolio';
import './style.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navigation />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
