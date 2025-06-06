import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experienceData = [
  {
    title: "Apple Inc. — iOS Developer Co-Op",
    time: "2023 – 2024",
    bullets: [
      "Built internal tools and helped resolve bugs for the Career Education Council.",
      "Developed and pitched NeuroNova: a cognitive enhancement app featured in the Guelph App Showcase.",
    ]
  },
  {
    title: "Engineering Design Projects",
    time: "2024 – Present",
    bullets: [
      "Designed a therapeutic wellness lamp for Seasonal Affective Disorder.",
      "Created a kinetic energy measurement system for lab hail simulation experiments."
    ]
  },
  {
    title: "Leadership & Competitions",
    time: "2024 – Present",
    bullets: [
      "Led a team in the 1220/1299 Ivey Case Competition (General Management Track).",
      "Represented residence as a Floor Rep on the Council — organized events and bridged communication gaps."
    ]
  }
];

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
