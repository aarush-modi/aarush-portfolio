import React from 'react';
import Reveal from './Reveal';

const Resume = () => (
  <section id="resume">
    <div className="section">
      <Reveal className="section-head">
        <p className="eyebrow">Résumé</p>
        <h2 className="section-title">The one-page version.</h2>
      </Reveal>

      <Reveal delay={80}>
        <div
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--hairline)',
            backgroundColor: '#ffffff',
          }}
        >
          <iframe
            src="/resume.pdf#view=FitH"
            title="Aarush Modi résumé"
            style={{
              display: 'block',
              width: '100%',
              height: 'clamp(480px, 88vh, 900px)',
              border: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '28px' }}>
          <a href="/resume.pdf" download className="btn btn-primary">Download PDF</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Open in new tab
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Resume;
