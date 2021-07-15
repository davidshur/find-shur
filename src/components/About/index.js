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
    <div className="bio">
      <img className="profile-picture" src={profilePicture} alt="David Shur" />
      <div className="text-box">
        <p className="bio-text">Hey there! I'm David and I am a professional software engineer. I love to build things, and I love to work on the pattern and procedure</p>
        <p className="bio-text">If you can identify, actuate, and iterate... you will see huge results in software, business, and personal life. I have founded two companies on the back of this mantra, Jurne and Sendelight, both of which achieved revenue stage. I brought this procedure to a third start-up, Lingua Robotica, helping them build and scale a search engine for developers. If you want to reach out, email me: shurdave@gmail.com!</p>
      </div>
    </div>
    <div className="skills">
      <a className="skill-link" href={resume}><ResumeIcon /></a>
      <a className="skill-link" href="https://github.com/davidshur"><GithubIcon /></a>
      <a className="skill-link" href="https://www.linkedin.com/in/david-shur/"><LinkedinIcon /></a>
    </div>
  </div>
);

export default About;