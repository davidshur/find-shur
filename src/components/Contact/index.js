import React from 'react';
import './style.css';

const Contact = () => (
  <div className="section contact" name="contact">
    <form>
      <input className="input-field" type="text" id="name" name="name" placeholder="Name" />
      <input className="input-field" type="email" id="email" name="email" placeholder="Email" />
      <textarea
        type="message"
        id="message"
        name="message"
        placeholder="Message"
        rows="4"
      />
      <input className="submit" type="submit" value="SUBMIT" />
    </form>
  </div>
);

export default Contact;
