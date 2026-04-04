import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "var(--bg-nav)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    zIndex: 999,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 2px 8px var(--shadow)"
  };

  const linkGroup = {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  };

  const linkHover = `
    nav a.nav-link::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--accent);
      transition: width 0.3s ease;
    }

    nav a.nav-link:hover {
      color: var(--accent);
      text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 50%, transparent);
    }

    nav a.nav-link:hover::after,
    nav a.nav-link.active::after {
      width: 100%;
    }

    nav a.nav-link.active {
      color: var(--accent);
    }
  `;

  return (
    <>
      <style>{linkHover}</style>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${scrollProgress}%`,
        backgroundColor: "var(--accent)",
        zIndex: 1000,
        transition: "width 0.1s linear",
      }} />
      <nav style={navStyle}>
        <div style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "1.2rem" }}>
          Aarush Modi
        </div>
        <div style={linkGroup}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
              style={{
                position: "relative",
                color: activeSection === link.href.replace('#', '') ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.3s",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "2px solid var(--accent)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s, background-color 0.3s",
              backgroundColor: "transparent",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "rotate(30deg)"}
            onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
