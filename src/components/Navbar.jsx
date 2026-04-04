import React from 'react';
import { navLinks } from '../data';

const Navbar = ({ theme, toggleTheme }) => {
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

  const linkStyle = {
    position: "relative",
    color: "var(--text)",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  };

  const linkHover = `
    nav a::after {
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

    nav a:hover {
      color: var(--accent);
      text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 50%, transparent);
    }

    nav a:hover::after {
      width: 100%;
    }
  `;

  return (
    <>
      <style>{linkHover}</style>
      <nav style={navStyle}>
        <div style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "1.2rem" }}>
          Aarush Modi
        </div>
        <div style={linkGroup}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}>{link.label}</a>
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
