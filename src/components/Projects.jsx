import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "ML Stock Portfolio Analysis Tool",
    desc: "Python-based command-line application that lets users fetch, store, and analyze historical stock data — and forecast the next day's closing price using a regression model. Designed for finance enthusiasts, data scientists, and aspiring quants who want to explore short-term equity price prediction.",
    link: "https://github.com/aarush-modi/Stock-Portfolio-Analysis",
    tech: "Python, Pandas, SQLite, Matplotlib, yfinance"
  },
  {
    title: "Monte Carlo Option Pricer",
    desc: "Simulates pricing for options using stochastic modeling and Monte Carlo simulations.",
    link: "https://github.com/aarush-modi/Monte-Carlo-European-Option-Pricer",
    tech: "Python, NumPy, Matplotlib"
  },
  {
    title: "Momentum Backtesting Engine",
    desc: "Python tool that evaluates momentum-based trading strategies. It fetches stock data, generates signals, simulates portfolio returns, calculates performance metrics, and visualizes the results.",
    link: "https://github.com/aarush-modi/Momentum-Backtesting-Engine",
    tech: "Python, Pandas, SQLite, Matplotlib, yfinance"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ marginTop: "30px" }}>
        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px"
        }}>
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                padding: "10px 20px",
                backgroundColor: i === activeIndex ? "#f5b301" : "#ffffff10",
                color: i === activeIndex ? "#0b1d35" : "#ffffff",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Project */}
        <div data-aos="fade-in" style={{
          backgroundColor: "#ffffff10",
          padding: "30px",
          borderRadius: "8px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left"
        }}>
          <h3>{projects[activeIndex].title}</h3>
          <p>{projects[activeIndex].desc}</p>
          <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
            Tech Stack: {projects[activeIndex].tech}
          </p>
          <a href={projects[activeIndex].link} target="_blank" rel="noreferrer" style={{
            color: "#f5b301",
            fontWeight: "bold",
            marginTop: "10px",
            display: "inline-block"
          }}>
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
