import React from 'react';
import './Nav.css'

function Nav(){
    return(
        <nav className = 'nav'>
            <h3 className = 'nav-title'>HDNonni</h3>
            <ul className = 'nav-links'>
                <li><a href="/" className="nav2-link">Home</a></li>
                <li><a href="projects" className="nav2-link">My Projects</a></li>
                <li><a href="/about" className="nav2-link">About Me</a></li>
                <li><a href="/fun" className="nav2-link">Fun Stuff</a></li>
            </ul>
        </nav>

    )
}

export default Nav;