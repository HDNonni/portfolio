import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerDiv">
      <ul className="footerStyle">
        <li>
          <a href="/" className="nav2-link">
            Home
          </a>
        </li>
        <li>
          <a href="projects" className="nav2-link">
            My Projects
          </a>
        </li>
        <li>
          <a href="/about" className="nav2-link">
            About Me
          </a>
        </li>
        <li>
          <a href="/fun" className="nav2-link">
            Fun Stuff
          </a>
        </li>
        <li className="copyWrite">&copy; HDNonni 2020.</li>
      </ul>
    </div>
  );
}
export default Footer;
