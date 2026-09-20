import React from 'react';
import { projects } from '../data';
import Reveal from './Reveal';

const ProjectCard = ({ project, featured }) => (
  <div
    className="card card-interactive"
    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <h3
      style={{
        fontSize: featured ? 'clamp(1.5rem, 3.2vw, 2.125rem)' : '1.3125rem',
        fontWeight: 600,
        letterSpacing: '-0.025em',
        lineHeight: 1.15,
        marginBottom: '14px',
      }}
    >
      {project.title}
    </h3>

    <p
      className="muted"
      style={{
        fontSize: featured ? '1.0625rem' : '0.9375rem',
        lineHeight: 1.6,
        marginBottom: '22px',
        maxWidth: featured ? '68ch' : 'none',
      }}
    >
      {project.desc}
    </p>

    <div className="chip-row" style={{ marginBottom: '22px' }}>
      {project.tech.map(t => (
        <span key={t} className="chip">{t}</span>
      ))}
    </div>

    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="arrow-link"
      aria-label={`View ${project.title} on GitHub`}
      style={{ marginTop: 'auto' }}
    >
      <span>View on GitHub</span>
      <span aria-hidden="true">→</span>
    </a>
  </div>
);

const Projects = () => {
  const [lead, ...rest] = projects;

  return (
    <section id="projects">
      <div className="section">
        <Reveal className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Things I've shipped.</h2>
        </Reveal>

        <div className="grid-2">
          <Reveal className="span-all">
            <ProjectCard project={lead} featured />
          </Reveal>

          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} style={{ height: '100%' }}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
