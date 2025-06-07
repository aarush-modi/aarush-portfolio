import React from 'react';

const Navbar = () => {
  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(11, 29, 53, 0.8)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    zIndex: 999,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"
  };

  const linkGroup = {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  };

  const linkStyle = {
    position: "relative",
    color: "white",
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
      background-color: #f5b301;
      transition: width 0.3s ease;
    }

    nav a:hover {
      color: #f5b301;
      text-shadow: 0 0 8px #f5b30188;
    }

    nav a:hover::after {
      width: 100%;
    }
  `;

  return (
    <>
      <style>{linkHover}</style>
      <nav style={navStyle}>
        <div style={{ color: "#f5b301", fontWeight: "bold", fontSize: "1.2rem" }}>
          Aarush Modi
        </div>
        <div style={linkGroup}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#experience" style={linkStyle}>Experience</a>
          <a href="#resume" style={linkStyle}>Resume</a>
          <a href="#connect" style={linkStyle}>Connect</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
