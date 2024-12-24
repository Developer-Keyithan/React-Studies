import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <h2 className="contact-heading">CONTACT US</h2>
        <span></span>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <address className="contact-description">
            <p>No57, 2nd Cross Street Vavuniya, Srilanka.</p>
            <p>info@coffeeshopwebsite.com</p>
            <p>+94 112 233 445</p>
            <p>Monday - Friday : 9:00 AM - 3:00 PM</p>
            <p>Saturday : 10:00 AM - 3:00 PM</p>
            <p>Sunday : Closed</p>
            <p>www.Coffeeshop.com</p>
          </address>
        </div>
        <form className="contact-right" onSubmit={handleSubmit}>
          <input type="text" className="form personal" name="name" placeholder="Your Name" required />
          <input type="tel" className="form personal" name="mobile" placeholder="Your Mobile" required />
          <input type="email" className="form personal" name="email" placeholder="Your E-mail" required />
          <textarea className="form textarea" name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="form-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;