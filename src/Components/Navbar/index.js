import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
const ResponsiveNavbar = () => {
  const handleToggle = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand-title">Madelyn Torff</div>
        <a href="#" className="toggle-button" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <Link to="/projects" className="links">
              <li>
                <a href="#">Projects</a>
              </li>
            </Link>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
