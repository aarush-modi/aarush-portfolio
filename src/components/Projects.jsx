import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "ML Stock Portfolio Analysis Tool",
    desc: "Python-based command-line application that lets users fetch, store, and analyze historical stock data — and forecast the next day's closing price using a regression model. Designed for finance enthusiasts, data scientists, and aspiring quants who want to explore short-term equity price prediction.",
    tech: ["Python", "Pandas", "SQLite", "Matplotlib", "yfinance"],
    link: "https://github.com/aarush-modi/Stock-Portfolio-Analysis"
  },
  {
    title: "Monte Carlo Option Pricer",
    desc: "Simulates pricing for options using stochastic modeling and 1,000,000 Monte Carlo simulations.",
    tech: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/aarush-modi/Monte-Carlo-European-Option-Pricer"
  },
  {
    title: "Momentum Backtesting Engine",
    desc: "Python tool that evaluates momentum-based trading strategies. It fetches stock data, generates signals, simulates portfolio returns, calculates performance metrics, and visualizes the results.",
    tech: ["Python", "Pandas", "SQLite", "Matplotlib", "yfinance"],
    link: "https://github.com/aarush-modi/Momentum-Backtesting-Engine"
  }
];

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
              backgroundColor: "#ffffff10",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "350px",
              minWidth: "280px",
              textAlign: "left",
              transition: "transform 0.3s",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              borderLeft: "5px solid #f5b301"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p style={{ fontSize: "0.85rem", color: "#ccc" }}>
              <strong>Tech:</strong> {p.tech.join(", ")}
            </p>
            <a href={p.link} target="_blank" rel="noreferrer" style={{
              color: "#f5b301",
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
