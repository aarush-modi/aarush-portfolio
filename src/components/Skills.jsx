import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../data';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
              backgroundColor: "#ffffff10",
              borderRadius: "8px",
              padding: "24px",
              borderLeft: "4px solid #f5b301",
            }}
          >
            <h3 style={{ color: "#f5b301", marginBottom: "12px", fontSize: "1.1rem" }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    backgroundColor: "#ffffff15",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    color: "#ddd",
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
