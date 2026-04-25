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
    title: "F.R.I.D.A.Y. Assistant",
    desc: "Building a personal AI assistant inspired by Iron Man's F.R.I.D.A.Y. — an intelligent, voice-driven system designed to automate tasks, manage workflows, and provide real-time insights.",
    tech: ["Python", "AI/ML", "NLP", "APIs"],
    link: "https://github.com/aarush-modi",
  },
  {
    title: "ML Stock Portfolio Analysis Tool",
    desc: "Python-based command-line application that lets users fetch, store, and analyze historical stock data — and forecast the next day's closing price using a regression model. Designed for finance enthusiasts, data scientists, and aspiring quants who want to explore short-term equity price prediction.",
    tech: ["Python", "Pandas", "SQLite", "Matplotlib", "yfinance"],
    link: "https://github.com/aarush-modi/Stock-Portfolio-Analysis",
  },
  {
    title: "2D Fantasy Kingdom RPG",
    desc: "A top-down 2D RPG set in a fantasy kingdom, built as a school project. Features exploration, combat, and story-driven quests in a hand-crafted pixel world.",
    tech: ["Unity", "C#", "2D Game Design"],
    link: "https://github.com/aarush-modi",
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
    title: "Volunteer Web Dev — Public Daycares",
    time: "2025 – Present",
    bullets: [
      "Designing and developing websites for government-funded daycares to improve their online presence and community reach.",
      "Working directly with daycare administrators to understand their needs and deliver accessible, user-friendly sites.",
    ],
  },
  {
    title: "Engineering Design Projects",
    time: "2024 – Present",
    bullets: [
      "Designed a therapeutic wellness lamp for Seasonal Affective Disorder.",
      "Created a kinetic energy measurement system for lab hail simulation experiments.",
      "Built a deep sea topographic mining tool for mapping and analyzing underwater terrain for resource extraction.",
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
  { category: "Languages", items: ["Python", "JavaScript", "HTML", "CSS", "C/C++", "C#", "Java", "Swift", "Arduino"] },
  { category: "Frameworks & Libraries", items: ["React", "Vite", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "yfinance", "Deck.gl", "MapLibre GL JS", "AOS", "react-icons"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "SQLite", "Uvicorn", "Arduino", "Unity", "gh-pages"] },
  { category: "Concepts & Methods", items: ["Monte Carlo Simulation", "Black-Scholes Pricing", "Linear Regression", "Time-series Forecasting", "Backtesting", "Sharpe Ratio", "Maximum Drawdown", "MAE/RMSE Evaluation", "REST APIs", "3D Geospatial Visualization", "Embedded Systems", "CLI Design"] },
];

export const socials = [
  { platform: "github", url: "https://github.com/aarush-modi" },
  { platform: "linkedin", url: "https://linkedin.com/in/aarush-modi" },
];
