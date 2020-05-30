import React from "react";
import "./Projects.css";
import Footer from "./Footer";
import Nav from "./Nav";
import SmallCardImage from "./SmallCardImage";
import restaurant from "../assets/images/restaurantPic.png";
import ringo from "../assets/images/ringoScreenshot.png";
import garden from "../assets/images/gardenBouquet.png";
import aboutMe from "../assets/images/aboutMe.png";

function Projects() {
  return (
    <div>
      <Nav />
      <h1 className="projectsHeading"><span className = "titleAnimate">My Projects</span></h1>
      <div>The road hasn't been easy and there were several bumps along the way, but here are my favorite projects to share with you.</div>
      <div className="contentProjects">
      
        <div className="mainProject">
         
          <div className ="columnOne">
            
            <div>This column I designed and built( with a little help along the way!)</div>
            <div>
              <div className = "imagePlacement1">
                {/* <a href = " https://hdnonni.github.io/Mock-Restaurant/dessertFirst.html" target="_blank"</a>> */}
                
                <SmallCardImage
                imageLink = "https://hdnonni.github.io/Mock-Restaurant/dessertFirst.html" 
                imageSource={restaurant}
                imageAlternative="restaurant site"
                imageHead=""
                imageDescr=""
                />
                
              </div>
              <div className = "imagePlacement2">
                <SmallCardImage
                imageSource={aboutMe}
                imageAlternative="about me site"
                imageHead=""
                imageDescr=""
                />
              </div>
              <div className = "imagePlacement1">
                <SmallCardImage
                imageSource={garden}
                imageAlternative="garden site"
                imageHead=""
                imageDescr=""
                />
              </div>
              <div className = "imagePlacement2">
                <SmallCardImage
                imageSource={ringo}
                imageAlternative="tribute site"
                imageHead=""
                imageDescr=""
                />
              </div>
            </div>

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