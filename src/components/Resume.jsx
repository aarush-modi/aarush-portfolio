import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="resume">
      <h2 data-aos="fade-up">Resume</h2>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#ffffff10",
          borderRadius: "8px",
          padding: "24px",
          borderLeft: "4px solid #f5b301",
        }}
      >
        <iframe
          src="/resume.pdf"
          title="Resume"
          style={{
            width: "100%",
            height: "600px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        />
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: "20px",
            backgroundColor: "#f5b301",
            color: "#0b1d35",
            padding: "10px 24px",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
