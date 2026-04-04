export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Connect", href: "#connect" },
];

export const projects = [
  {
    title: "ML Stock Portfolio Analysis Tool",
    desc: "Python-based command-line application that lets users fetch, store, and analyze historical stock data — and forecast the next day's closing price using a regression model. Designed for finance enthusiasts, data scientists, and aspiring quants who want to explore short-term equity price prediction.",
    tech: ["Python", "Pandas", "SQLite", "Matplotlib", "yfinance"],
    link: "https://github.com/aarush-modi/Stock-Portfolio-Analysis",
  },
  {
    title: "Monte Carlo Option Pricer",
    desc: "Simulates pricing for options using stochastic modeling and 1,000,000 Monte Carlo simulations.",
    tech: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/aarush-modi/Monte-Carlo-European-Option-Pricer",
  },
  {
    title: "Momentum Backtesting Engine",
    desc: "Python tool that evaluates momentum-based trading strategies. It fetches stock data, generates signals, simulates portfolio returns, calculates performance metrics, and visualizes the results.",
    tech: ["Python", "Pandas", "SQLite", "Matplotlib", "yfinance"],
    link: "https://github.com/aarush-modi/Momentum-Backtesting-Engine",
  },
];

export const experience = [
  {
    title: "Apple Inc. — iOS Developer Co-Op",
    time: "2023 – 2024",
    bullets: [
      "Built internal tools and helped resolve bugs for the Career Education Council.",
      "Developed and pitched NeuroNova: a cognitive enhancement app featured in the Guelph App Showcase.",
    ],
  },
  {
    title: "Engineering Design Projects",
    time: "2024 – Present",
    bullets: [
      "Designed a therapeutic wellness lamp for Seasonal Affective Disorder.",
      "Created a kinetic energy measurement system for lab hail simulation experiments.",
    ],
  },
  {
    title: "Leadership & Competitions",
    time: "2024 – Present",
    bullets: [
      "Led a team in the 1220/1299 Ivey Case Competition (General Management Track).",
      "Represented residence as a Floor Rep on the Council — organized events and bridged communication gaps.",
    ],
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "Java", "C++", "Swift", "JavaScript"] },
  { category: "Data & ML", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQLite"] },
  { category: "Web & Tools", items: ["React", "HTML/CSS", "Git", "Vite", "GitHub Pages"] },
  { category: "Interests", items: ["Algorithmic Trading", "Machine Learning", "Financial Systems", "Quantitative Analysis"] },
];

export const socials = [
  { platform: "github", url: "https://github.com/aarush-modi" },
  { platform: "linkedin", url: "https://linkedin.com/in/aarush-modi" },
];
