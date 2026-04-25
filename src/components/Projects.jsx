import React, { useRef } from 'react';
import { projects } from '../data';

const ProjectCard = ({ project, delay }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      data-aos="fade-up"
      data-aos-delay={delay}
      style={{
        backgroundColor: "var(--card-bg)",
        padding: "24px",
        borderRadius: "8px",
        maxWidth: "350px",
        minWidth: "280px",
        textAlign: "left",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
        boxShadow: "0 4px 10px var(--shadow)",
        borderLeft: "5px solid var(--accent)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{project.title}</h3>
      <p style={{ margin: "12px 0" }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              backgroundColor: "var(--card-bg-hover)",
              padding: "4px 10px",
              borderRadius: "14px",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              transition: "background-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "var(--card-bg-hover)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} style={{
        color: "var(--accent)",
        display: "inline-block",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "letter-spacing 0.3s",
      }}
        onMouseEnter={e => e.currentTarget.style.letterSpacing = "1px"}
        onMouseLeave={e => e.currentTarget.style.letterSpacing = "0px"}
      >
        View on GitHub →
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        marginTop: "40px",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} delay={i * 100} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
