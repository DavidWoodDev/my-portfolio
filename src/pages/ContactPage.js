import React, { useState } from 'react';

function ContactPage() {
  console.log("ContactPage component loaded");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or store the message)
    console.log(formData);
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message" 
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
