import React from "react";
import "./Projects.css";
import Footer from "./Footer";
import NavbarBoot from "./NavbarBoot";
import SmallCardImage from "./SmallCardImage";
import restaurant from "../assets/images/restaurantPic.png";
import ringo from "../assets/images/ringoScreenshot.png";
import garden from "../assets/images/gardenBouquet.png";
import aboutMe from "../assets/images/aboutMe.png";
import battleship from "../assets/images/battleship.png";
import foodar from "../assets/images/foodar.png";
import homeDesign from "../assets/images/homeDesign.png";
import hosting from "../assets/images/hosting.png";
import oldPortfolio from "../assets/images/oldPortfolio.png";
import rightArrow from "../assets/images/arrow.png";
import leftArrow from "../assets/images/leftArrow.png";
import newPortfolio from "../assets/images/reactPortfolio.png";

function Projects() {
  return (
    <div>
      <NavbarBoot />
      <h1 className="projectsHeading">
        <span className="titleAnimate">My Projects</span>
      </h1>
      <div className = "main_background">
        <div className="pageDescrip">
          The road to this portfolio has been challenging, insightful,
          interesting and enjoyable.
        </div>
        <div className="subHead">
          It is my pleasure to share some of my favorite projects with you.
        </div>
        <div className="firstColumn">
          This column I designed and built( with a little help along the way!){" "}
          <span className = "space"></span>
          <span className="secondCol">
            Along my journey there were several tutorials and here is some of
            the results
          </span>
        </div>

        <div className="contentProjects">
          <div className="mainProject">
            <div className="subColumnOne">
              <div className="imagePlacement1">
                {/* <a href = " https://hdnonni.github.io/Mock-Restaurant/dessertFirst.html" target="_blank"</a>> */}

                <SmallCardImage
                  imageLink="https://hdnonni.github.io/Mock-Restaurant/dessertFirst.html"
                  imageSource={restaurant}
                  imageAlternative="restaurant site"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                Built for novice backyard gardeners using HTML, CSS and JQuery
                <img
                  className="rightArrow"
                  src={rightArrow}
                  alt="right Arrow"
                ></img>
              </div>
              <div className="imagePlacement2">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/About-Carol/aboutMe.html"
                  imageSource={aboutMe}
                  imageAlternative="about me site"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                I built this tribute for my grandpup using HTML, CSS and vanilla
                javaScript
                <img
                  className="rightArrow"
                  src={rightArrow}
                  alt="right Arrow"
                ></img>
              </div>
              <div className="projectDescription myProject">
                This is my new portfolio built in React with a little help from Bootstrap
                <img
                  className="rightArrow"
                  src={rightArrow}
                  alt="right Arrow"
                ></img>
              </div>
            </div>
            <div className="subColumnTwo">
           
              <div className="projectDescription">
                A Mock Restaurant built with HTML, CSS, Bootstrap and JQuery{" "}
                <img
                  className="rightArrow"
                  src={leftArrow}
                  alt="left Arrow"
                ></img>
              </div>
              <div className="imagePlacement1">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/gardenBouquet/flowers.html"
                  imageSource={garden}
                  imageAlternative="garden site"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                A simple about me page using HTML,CSS, Bootstrap and JQuery
                <img
                  className="rightArrow"
                  src={leftArrow}
                  alt="left Arrow"
                ></img>
              </div>
              <div className="imagePlacement2">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/Ringo-Tribute/index.html"
                  imageSource={ringo}
                  imageAlternative="tribute site"
                  imageHead=""
                  imageDescr=""
                />
              </div>

              {/* <div className="bottomSection">
              And Finally a side by side comparison of my portfolios
            </div> */}
              <div className="imagePlacement1">
                <SmallCardImage
                  imageLink="https://hdnonni.com"
                  imageSource={newPortfolio}
                  imageAlternative="new Portfolio"
                  imageHead=""
                  imageDescr=""
                />
              </div>
            </div>
          </div>

          <div className="mainProject">
            <div className="subColumnOne">
              <div className="imagePlacement1">
                {/* <a href = " https://hdnonni.github.io/Mock-Restaurant/dessertFirst.html" target="_blank"</a>> */}

                <SmallCardImage
                  imageLink="https://hdnonni.github.io/HeadStart/battleship.html"
                  imageSource={battleship}
                  imageAlternative="battleship game"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                A FreeCode Camp landing page challenge using HTML,CSS and JQuery{" "}
                <img
                  className="rightArrow"
                  src={rightArrow}
                  alt="right Arrow"
                ></img>
              </div>
              <div className="imagePlacement2">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/Foodar/index.html"
                  imageSource={foodar}
                  imageAlternative="food delivery site"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                A Udemy tutorial building a hosting site with HTML,CSS and JS
                <div></div>
                <img
                  className="rightArrow"
                  src={rightArrow}
                  alt="right Arrow"
                ></img>
              </div>
              <div className="imagePlacement1">
                <SmallCardImage
                  imageLink="https://hdnonni.com/portfolio"
                  imageSource={oldPortfolio}
                  imageAlternative="My old Portfolio"
                  imageHead=""
                  imageDescr=""
                />
              </div>
            </div>
            <div className="subColumnTwo">
              <div className="projectDescription">
                With the help of HeadFirst JS, I built a battleship game with
                HTML,CSS and JS{" "}
                <img
                  className="rightArrow"
                  src={leftArrow}
                  alt="left Arrow"
                ></img>
              </div>
              <div className="imagePlacement1">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/landing-page/landingPage.html"
                  imageSource={homeDesign}
                  imageAlternative="home design site"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                Revature project creating a Food delivery site (HTML,CSS and JS){" "}
                <img
                  className="rightArrow"
                  src={leftArrow}
                  alt="left Arrow"
                ></img>
              </div>
              <div className="imagePlacement2">
                <SmallCardImage
                  imageLink="https://hdnonni.github.io/css-course/index.html"
                  imageSource={hosting}
                  imageAlternative="hosting website"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className="projectDescription">
                My original portfolio built with wordpress
                <div></div>
                <img
                  className="rightArrow"
                  src={leftArrow}
                  alt="left Arrow"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

//https://wallpaperplay.com/board/sunrise-pictures-wallpapers
