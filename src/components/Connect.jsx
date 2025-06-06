import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect">
      <h2>Connect With Me</h2>

      <div style={{ fontSize: '30px', marginBottom: '20px' }}>
        <a href="https://github.com/aarush-modi" target="_blank" rel="noreferrer">
          <FaGithub style={{ marginRight: '15px' }} />
        </a>
        <a href="https://linkedin.com/in/aarush-modi" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <form
        action="https://formsubmit.co/amodi32@uwo.ca"
        method="POST"
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        <input type="hidden" name="_subject" value="Website Contact Form Response" />
        <input type="text" name="name" required placeholder="Your Name" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <input type="email" name="email" required placeholder="Your Email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <textarea name="message" rows="5" required placeholder="Your Message" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <button type="submit" style={{ backgroundColor: '#f5b301', padding: '10px 20px', border: 'none', color: '#0b1d35', fontWeight: 'bold' }}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Connect;

