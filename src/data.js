export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Connect", href: "#connect" },
];

export const education = {
  school: "University of Western Ontario",
  location: "London, ON",
  degree: "BESc, Software Engineering (Co-op) — Specialization in Artificial Intelligence",
  time: "Sept 2024 – June 2029",
  details: [
    "Coursework (2026–27): Introduction to Machine Learning (DS 3000); Data Engineering & Machine Learning (AISE 3010).",
  ],
};

export const projects = [
  {
    title: "Autonomous Investment Committee",
    desc: "A multi-agent AI system where six specialized LLM agents collaborate as an investment committee. One CLI command takes a ticker and a hypothesis and returns a structured, citation-backed investment memo with a Buy/Sell/Hold recommendation. A Claude \"Chair\" agent decides at runtime which of five specialists to consult, so the execution graph comes from model reasoning rather than a hard-coded pipeline. Built from scratch on the raw Anthropic SDK — an async tool-use loop base class, a @tool decorator that generates JSON schemas from Python type hints, structure-aware RAG over SEC filings in ChromaDB, and prompt caching plus a tiered model architecture that keeps a full run under $1.",
    tech: ["Python", "Anthropic Claude API", "asyncio", "ChromaDB", "RAG", "SQLite"],
    link: "https://github.com/aarush-modi/Autonomous-Investment-Committee",
  },
  {
    title: "Momentum Backtesting Engine",
    desc: "A modular backtesting framework for long/short momentum strategies across 1,000+ equities and 20 years of data (5,000,000+ price records). Reports annualized return, Sharpe, volatility, and max drawdown, with position sizing, transaction costs, and execution lag modeled.",
    tech: ["Python", "Pandas", "yfinance", "SQLite", "Matplotlib"],
    link: "https://github.com/aarush-modi/Momentum-Backtesting-Engine",
  },
  {
    title: "ML Stock Portfolio Analyzer",
    desc: "Automates equity data acquisition, storage, and short-term price forecasting for 500+ tickers (100,000+ data points). Trains scikit-learn regression models that beat moving-average baselines by 15–20% on MAE/RMSE with sub-second inference.",
    tech: ["Python", "Pandas", "scikit-learn", "yfinance", "SQLite"],
    link: "https://github.com/aarush-modi/Stock-Portfolio-Analysis",
  },
  {
    title: "Monte Carlo Option Pricer",
    desc: "Simulates pricing for options using stochastic modeling and 1,000,000 Monte Carlo simulations.",
    tech: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/aarush-modi/Monte-Carlo-European-Option-Pricer",
  },
  {
    title: "F.R.I.D.A.Y. Assistant",
    desc: "Building a personal AI assistant inspired by Iron Man's F.R.I.D.A.Y. — an intelligent, voice-driven system designed to automate tasks, manage workflows, and provide real-time insights.",
    tech: ["Python", "AI/ML", "NLP", "APIs"],
    link: "https://github.com/aarush-modi",
  },
  {
    title: "2D Fantasy Kingdom RPG",
    desc: "A top-down 2D RPG set in a fantasy kingdom, built as a school project. Features exploration, combat, and story-driven quests in a hand-crafted pixel world.",
    tech: ["Unity", "C#", "2D Game Design"],
    link: "https://github.com/aarush-modi",
  },
];

export const experience = [
  {
    title: "A&A Optoelectronics — Software Developer",
    time: "May 2026 – Aug 2026 · Toronto, ON",
    bullets: [
      "Sole software developer for the company — led requirements and design of a new corporate website and a commercial lighting-control app that automates multiple light fixtures over Bluetooth mesh with sensor-driven behaviours like motion-triggered dim timers.",
      "Owned the live production site's security and availability — hardened the site, reviewed traffic and access logs, and served as the technical point of contact for issues.",
      "Resolved a production outage affecting VPN and secure-browser clients within 24 hours, tracing the root cause, restoring access, and filing the vendor report that cleared the false positive.",
    ],
  },
  {
    title: "Career Education Council (in partnership with Apple) — iOS App Developer, Co-op",
    time: "Oct 2023 – Jan 2024 · Guelph, ON",
    bullets: [
      "Selected for an Apple-partnered co-op program in optimized, production-ready iOS app development and entrepreneurship.",
      "Independently researched, designed, and built a self-improvement iOS app in Swift; pitched it at the Guelph Developer Showcase, generating 6 investor inquiries.",
    ],
  },
  {
    title: "Privately Managed Residential Properties — Property Manager",
    time: "June 2023 – Oct 2025 · Ajax, ON",
    bullets: [
      "Independently ran operations, RTA-compliant maintenance, leasing tours, and tenant relations for multiple residential properties on behalf of a non-resident owner for 2+ years, alongside full-time studies.",
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
  { category: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "Swift", "C/C++", "MATLAB"] },
  { category: "AI / LLM Engineering", items: ["Anthropic Claude API", "Tool Use", "Multi-Agent Orchestration", "RAG", "Embeddings", "sentence-transformers", "ChromaDB", "Prompt Caching", "MCP Servers", "Structured Outputs (Pydantic)", "scikit-learn"] },
  { category: "Frameworks & Libraries", items: ["FastAPI", "React", "Node.js", "asyncio", "Pandas", "NumPy", "SciPy", "Matplotlib", "Jinja2"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "Docker", "Kubernetes", "SQLite", "VS Code", "IntelliJ", "Claude Code"] },
];

export const socials = [
  { platform: "github", url: "https://github.com/aarush-modi" },
  { platform: "linkedin", url: "https://linkedin.com/in/aarush-modi" },
];
