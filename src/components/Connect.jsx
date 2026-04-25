import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socials } from '../data';

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid var(--card-bg-hover)',
  backgroundColor: 'var(--card-bg)',
  color: 'var(--text)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.3s',
};

const Connect = () => {
  return (
    <section id="connect">
      <h2 data-aos="fade-up">Connect With Me</h2>

      <div data-aos="fade-up" data-aos-delay="100" style={{ fontSize: '30px', marginBottom: '20px' }}>
        {socials.map((s) => (
          <a
            key={s.platform}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.platform === 'github' ? 'GitHub profile' : 'LinkedIn profile'}
            style={{ transition: "transform 0.3s, color 0.3s", display: "inline-block" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            {s.platform === 'github' ? <FaGithub style={{ marginRight: '15px' }} /> : <FaLinkedin />}
          </a>
        ))}
      </div>

      <form
        data-aos="fade-up"
        data-aos-delay="200"
        action="https://formsubmit.co/amodi32@uwo.ca"
        method="POST"
        aria-label="Contact form"
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        <input type="hidden" name="_subject" value="Website Contact Form Response" />
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
          onBlur={e => e.currentTarget.style.borderColor = "var(--card-bg-hover)"}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
          onBlur={e => e.currentTarget.style.borderColor = "var(--card-bg-hover)"}
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
          onBlur={e => e.currentTarget.style.borderColor = "var(--card-bg-hover)"}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'var(--accent)',
            padding: '10px 24px',
            border: 'none',
            color: 'var(--bg)',
            fontWeight: 'bold',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Connect;
