import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>Download my resume below:</p>
      <a href="/resume.pdf" download style={{ color: '#f5b301', fontWeight: 'bold' }}>
        Download PDF
      </a>
    </section>
  );
};

export default Resume;

