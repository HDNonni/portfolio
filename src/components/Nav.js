import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className = {styles.display}>
      <header className={styles.nav_top}>
        <nav className={styles.nav_links}>
          <div className={styles.toggle_button}>
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </div>
          <div className={styles.nav_title}>
            <a href="/">HDNonni</a>
          </div>

          <div className={styles.spacer}></div>
          <div className={styles.nav_link_items}>
            <ul>
              <li>
                <a href="/" className={styles.nav_link}>
                  Home
                </a>
              </li>
              <li>
                <a href="projects" className={styles.nav_link}>
                  My Projects
                </a>
              </li>
              <li>
                <a href="/about" className={styles.nav_link}>
                  About Me
                </a>
              </li>
              <li>
                <a href="/fun" className={styles.nav_link}>
                  Fun Stuff
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
