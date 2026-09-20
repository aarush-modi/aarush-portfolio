import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socials } from '../data';
import Reveal from './Reveal';

const Connect = () => (
  <section id="connect" className="band">
    <div className="section">
      <Reveal className="section-head">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's build something.</h2>
      </Reveal>

      <div className="grid-2" style={{ alignItems: 'start' }}>
        <Reveal>
          <p className="lead" style={{ marginBottom: '28px', maxWidth: '38ch' }}>
            Open to internships, collaborations, and the occasional 3 AM idea. The fastest
            way to reach me is the form — or find me here.
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(s => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.platform === 'github' ? 'GitHub profile' : 'LinkedIn profile'}
                className="card card-interactive"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  padding: 0,
                  borderRadius: '50%',
                  color: 'var(--text)',
                  fontSize: '19px',
                }}
              >
                {s.platform === 'github' ? <FaGithub /> : <FaLinkedin />}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            action="https://formsubmit.co/amodi32@uwo.ca"
            method="POST"
            aria-label="Contact form"
          >
            <input type="hidden" name="_subject" value="Website Contact Form Response" />
            <input className="field" type="text" name="name" required placeholder="Name" />
            <input className="field" type="email" name="email" required placeholder="Email" />
            <textarea
              className="field"
              name="message"
              rows="5"
              required
              placeholder="Message"
              style={{ resize: 'vertical' }}
            />
            <button type="submit" className="btn btn-primary" style={{ marginTop: '6px' }}>
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Connect;
