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
        <p className="bio-text">I am a full-stack web developer and software engineer. I have a passion for building robust applications that are well integrated. As the founder and CEO of Jurne I have experience in getting projects off the ground quickly. I love building efficient programs and scalable procedures.</p>
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