import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../data';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
          <div
            key={i}
            data-aos="fade-up"
            style={{
              backgroundColor: "var(--card-bg)",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "350px",
              minWidth: "280px",
              textAlign: "left",
              transition: "transform 0.3s",
              boxShadow: "0 4px 10px var(--shadow)",
              borderLeft: "5px solid var(--accent)"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <strong>Tech:</strong> {p.tech.join(", ")}
            </p>
            <a href={p.link} target="_blank" rel="noreferrer" style={{
              color: "var(--accent)",
              display: "inline-block",
              marginTop: "10px",
              fontWeight: "bold"
            }}>
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
