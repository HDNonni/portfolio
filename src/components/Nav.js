import React from 'react';
import styles from "./Nav.module.css";

function Nav(){
    return(
        <nav className = {styles.nav}>
            <h3 className = {styles.nav_title}>HDNonni</h3>
            <ul className = {styles.nav_links}>
                <li><a href="/" className={styles.nav2_link}>Home</a></li>
                <li><a href="projects" className={styles.nav2_link}>My Projects</a></li>
                <li><a href="/about" className={styles.nav2_link}>About Me</a></li>
                <li><a href="/fun" className={styles.nav2_link}>Fun Stuff</a></li>
            </ul>
        </nav>

    )
}

export default Nav;