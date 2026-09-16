import React, { useState } from 'react';
import { experience as experienceData, education } from '../data';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = index => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="experience">
      <h2 data-aos="fade-up">Education</h2>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          maxWidth: '800px',
          margin: '40px auto 80px',
          background: 'var(--card-bg)',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '4px solid var(--accent)',
          textAlign: 'left',
        }}
      >
        <h3 style={{ marginBottom: '5px' }}>{education.school}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
          {education.time} · {education.location}
        </p>
        <p style={{ marginBottom: '10px' }}>{education.degree}</p>
        <ul style={{ paddingLeft: '20px' }}>
          {education.details.map((d, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{d}</li>
          ))}
        </ul>
      </div>

      <h2 data-aos="fade-up">Experience</h2>
      <div style={{ maxWidth: '800px', margin: '40px auto' }}>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === index}
            data-aos="fade-right"
            data-aos-delay={index * 150}
            style={{
              background: "var(--card-bg)",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderLeft: "4px solid var(--accent)"
            }}
            onClick={() => toggle(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(index); } }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
              <div>
                <h3 style={{ marginBottom: "5px" }}>{exp.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{exp.time}</p>
              </div>
              <span style={{
                fontSize: "1.2rem",
                transition: "transform 0.3s",
                transform: activeIndex === index ? "rotate(90deg)" : "rotate(0deg)",
                color: "var(--accent)",
              }}>
                ›
              </span>
            </div>
            <div style={{
              maxHeight: activeIndex === index ? "800px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease, opacity 0.3s ease",
              opacity: activeIndex === index ? 1 : 0,
            }}>
              <ul style={{ marginTop: "10px", textAlign: "left" }}>
                {exp.bullets.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
