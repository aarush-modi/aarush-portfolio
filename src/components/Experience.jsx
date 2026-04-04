import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experience as experienceData } from '../data';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggle = index => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="experience">
      <h2 data-aos="fade-up">Experience</h2>
      <div style={{ maxWidth: '800px', margin: '40px auto' }}>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-right"
            style={{
              background: "#ffffff10",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderLeft: "4px solid #f5b301"
            }}
            onClick={() => toggle(index)}
          >
            <div>
              <h3 style={{ marginBottom: "5px" }}>{exp.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#ccc" }}>{exp.time}</p>
            </div>
            {activeIndex === index && (
              <ul style={{ marginTop: "10px", textAlign: "left" }}>
                {exp.bullets.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
