import React from "react";
import "./Projects.css";
import Footer from "./Footer";
import Nav from "./Nav";

function Projects() {
  return (
    <div>
      <Nav />
      <h1 className="projectsHeading"><span className = "titleAnimate">My Projects</span></h1>
      <div className="contentProjects">
        <div className="mainProject">
          <div className ="columnOne">
            <div>The road hasn't been easy and there were several bumps along the way, but here are my favorite projects to share with you.</div>
            <div>This column I designed and built( with a little help along the way!)</div>

          </div>
        </div>

        <div className="mainProject">
          <div className = "columnTwo">column 2</div>
          <div>On my jouney I took advantage of several tutorials</div>
          <div>In this column I share with you the results of some of my learning experiences</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;


//https://wallpaperplay.com/board/sunrise-pictures-wallpapers