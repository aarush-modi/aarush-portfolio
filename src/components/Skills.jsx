import React from 'react';
import { skills } from '../data';
import Reveal from './Reveal';

const Skills = () => (
  <section id="skills" className="band">
    <div className="section">
      <Reveal className="section-head">
        <p className="eyebrow">Toolkit</p>
        <h2 className="section-title">What I build with.</h2>
      </Reveal>

      <div className="grid-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 70} style={{ height: '100%' }}>
            <div className="card" style={{ height: '100%' }}>
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  marginBottom: '18px',
                }}
              >
                {group.category}
              </h3>
              <div className="chip-row">
                {group.items.map(item => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
