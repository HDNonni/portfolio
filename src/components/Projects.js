import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <Nav />
      <h1 className="projectsHeading">My Projects</h1>
      <div className="contentProjects">
        <div className="mainProject columnOne">
          <div>
            This page will display and have clickable images for my projects
          </div>
        </div>
      </div>
      <div className="mainProject columnTwo"></div>
      <Footer />
    </div>
  );
}

export default Projects;
