import React from 'react';
import './style.css';

const Contact = () => (
  <div className="section contact" name="contact">
    <h3 className="section-header-dark">Contact</h3>
    <form action="mailto:david.shur@yahoo.com?subject=Contact from FindShur!" method="POST" enctype="text/plain">
      <input className="input-field" type="text" id="name" name="name" placeholder="Name" />
      <input className="input-field" type="email" id="email" name="email" placeholder="Email" />
      <textarea
        type="message"
        id="message"
        name="comments"
        placeholder="Message"
        rows="4"
      />
      <input className="submit" type="submit" value="SUBMIT" />
    </form>
  </div>
);

export default Contact;
