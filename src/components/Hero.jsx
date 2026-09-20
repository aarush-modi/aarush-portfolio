import React from 'react';
import Reveal from './Reveal';

const Hero = () => (
  <>
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-scrim" />

      <div className="hero-inner">
        <Reveal>
          <p className="eyebrow">Software Engineering · Western University</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display">Aarush Modi</h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero-sub">
            I build multi-agent LLM systems, RAG pipelines, and the quantitative
            tooling that sits underneath them.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#resume" className="btn btn-secondary">Read résumé</a>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9.5l6 6 6-6" />
        </svg>
      </a>
    </section>

    <section className="section" id="about">
      <Reveal className="section-head">
        <p className="eyebrow">About</p>
        <h2 className="section-title">Curiosity first, code second.</h2>
      </Reveal>

      <Reveal className="prose" delay={80}>
        <p>
          I'm a third-year <strong>Software Engineering</strong> student at{' '}
          <strong>Western University</strong>, specializing in{' '}
          <strong>Artificial Intelligence</strong> — with a thing for{' '}
          <strong>multi-agent AI systems, financial modelling</strong>, and building ideas
          that outlive codebases.
        </p>

        <p>My journey into tech started not with code, but with curiosity…</p>

        <p>
          This past summer I was the sole software developer at{' '}
          <strong>A&amp;A Optoelectronics</strong>, where I owned a production website end
          to end and designed a Bluetooth mesh app for commercial lighting control.
        </p>

        <p>
          I'm fluent in <strong>Python, Java, C++, and Swift</strong>, and most of my time
          goes to <strong>LLM engineering</strong> — agent orchestration, RAG pipelines, and
          the quantitative systems underneath <strong>algorithmic trading</strong>.
        </p>

        <p>
          Whether it's a hackathon, a product prototype, or a 3 AM idea scribbled on my
          iPad — if it's worth building, I'm all in.
        </p>

        <blockquote className="pull-quote">
          The best way to predict the future is to create it.
        </blockquote>
      </Reveal>
    </section>
  </>
);

export default Hero;
