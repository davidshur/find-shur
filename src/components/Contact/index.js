import React from 'react';

const Contact = () => (
  <div>
    <form>
      <input type="text" id="name" name="name" value="name" />
      <label for="name">Name</label><br />
      <input type="email" id="email" name="email" value="email" />
      <label for="email">Email</label><br />
      <textarea type="message" id="message" name="message" value="message" />
      <label for="message">Message</label><br />
      <input type="submit" value="submit" />
    </form>
  </div>
);

export default Contact;
