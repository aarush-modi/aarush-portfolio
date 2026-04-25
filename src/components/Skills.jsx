import React from 'react';
import { skills } from '../data';

const Skills = () => {

  return (
    <section id="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        maxWidth: "900px",
        margin: "40px auto 0",
        textAlign: "left",
      }}>
        {skills.map((group, i) => (
          <div
            key={group.category}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            style={{
              backgroundColor: "var(--card-bg)",
              borderRadius: "8px",
              padding: "24px",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <h3 style={{ color: "var(--accent)", marginBottom: "12px", fontSize: "1.1rem" }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    backgroundColor: "var(--card-bg-hover)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
