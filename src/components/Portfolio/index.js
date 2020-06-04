import React from 'react';
import Projects from '../../utils/projects';
import './style.css';

const Portfolio = () => (
  <div className="portfolio" name="portfolio">
    <h3 className="section-header">Projects</h3>
    <div className="project-container">
      {Projects.map(project =>
        <div className="project" key={project.id}>
          <img className="project-image" src={project.image} alt={project.title} />
        </div>
      )}
    </div>
  </div>
);

export default Portfolio;
