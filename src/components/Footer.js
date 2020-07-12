import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <ul className={styles.footerStyle}>
        <li>
          <a href="/" className={styles.nav2_link}>
            Home
          </a>
        </li>
        <li>
          <a href="projects" className={styles.nav2_link}>
            My Projects
          </a>
        </li>
        <li>
          <a href="/about" className={styles.nav2_link}>
            About Me
          </a>
        </li>
        <li>
          <a href="/fun" className={styles.nav2_link}>
            Fun Stuff
          </a>
        </li>
        
        
      </ul>
      <div className={styles.spacer}></div>
      <div className={styles.copyWrite}>&copy; HDNonni 2020.</div>
    </div>
  );
}
export default Footer;
