import React from 'react';
import GithubIcon from '../../assets/icons/github';
import LinkedinIcon from '../../assets/icons/linkedin';
import ResumeIcon from '../../assets/icons/resume';
import profilePicture from '../../assets/images/david.jpg';
import resume from '../../assets/images/resume.pdf';
import './style.css';

const About = () => (
  <div className="about" name="about">
    <h3 className="section-header">About</h3>
    <div className="cols">
      <div className="bio">
        <img className="profile-picture" src={profilePicture} alt="David Shur" />
        <div className="text-box">
          <p className="bio-text">David Shur is a full-stack web developer and software engineer. David is founder and CEO of Jurne where he develops high quality, robust products and leads a team of smart people to achieve their goals together.</p>
          <p className="bio-text">If you would like to learn more about David, you should try one of his steaks, he grills them perfectly!</p>
        </div>
      </div>
      <div className="skills">
        <h5 width="50px">Helpful Links:</h5>
        <a className="skill-link" href={resume}><ResumeIcon /></a>
        <a className="skill-link" href="https://github.com/davidshur"><GithubIcon /></a>
        <a className="skill-link" href="https://www.linkedin.com/in/david-shur/"><LinkedinIcon /></a>
      </div>
    </div>
  </div>
);

export default About;