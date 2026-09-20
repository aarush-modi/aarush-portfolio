import React, { useState } from 'react';
import { experience as experienceData, education } from '../data';
import Reveal from './Reveal';

const Chevron = () => (
  <svg className="tl-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M9 5.5l7 6.5-7 6.5" />
  </svg>
);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = i => setActiveIndex(prev => (prev === i ? null : i));

  return (
    <section id="experience" className="band">
      <div className="section">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Where I'm studying.</h2>
        </Reveal>

        <Reveal>
          <div className="card" style={{ marginBottom: 'clamp(72px, 10vw, 120px)' }}>
            <h3
              style={{
                fontSize: 'clamp(1.1875rem, 2.4vw, 1.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.022em',
                marginBottom: '6px',
              }}
            >
              {education.school}
            </h3>
            <p className="mono" style={{ marginBottom: '16px' }}>
              {education.time} · {education.location}
            </p>
            <p style={{ marginBottom: '14px' }}>{education.degree}</p>
            {education.details.map((d, i) => (
              <p key={i} className="muted" style={{ fontSize: '0.9375rem' }}>{d}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I've worked.</h2>
        </Reveal>

        <Reveal>
          <div className="timeline">
            {experienceData.map((exp, index) => {
              const open = activeIndex === index;
              return (
                <div key={exp.title} className="tl-item" data-open={open}>
                  <button
                    className="tl-trigger"
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    aria-controls={`exp-panel-${index}`}
                  >
                    <span>
                      <span className="tl-title" style={{ display: 'block' }}>
                        {exp.title}
                      </span>
                      <span className="mono">{exp.time}</span>
                    </span>
                    <Chevron />
                  </button>

                  <div className="tl-panel" id={`exp-panel-${index}`} role="region">
                    <div className="tl-panel-inner">
                      <ul>
                        {exp.bullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
