import React from "react";
import "./About.css";
import imageGrandKids from "../assets/images/grandkids2.png";
import imageFamily from "../assets/images/famPhoto19.png";

import CardImage from "./CardImage";

function About() {
  return (
    <div>
      <h1 className="aboutHeading">About Me!</h1>
      <div className="contentAbout">
        <div className="mainAbout">
          {/* <div> */}

          <div className="column1">
            <p>
              So my journey started many years ago when I walked down the aisle
              and had five children.
            </p>
            <p>Those kids are THE most important things in my life.</p>
            <p>
              Most of my life and theirs was a struggle and many times it was
              difficult to make ends meet, however we persevered and made it
              through.
            </p>
            <p>
              Once the children were all in school, I went back to school. I
              earned an Associates of applied science with focus on Occupational
              Therapy Assistant and a Bachelors Degree in General Studies with a
              focus on Occupational Health and Safety.
            </p>
            <p>
              There were many long days and sleepless nights, going to school,
              working sometimes three jobs and trying to be the best single
              parent I could.
            </p>
            <p> Yes, I said single, since my youngest was three.</p>
            <p>
              So times weren't easy but today my children are all successful ,
              healthy and the greatest people on the planet. Then they gave me
              my joys, grandchildren!
            </p>
            <p>
              And since that picture we added a great-grandchild and another
              grandbaby is on its way!
            </p>
            <p>
              Big deal you say or whats the point of this...? Well read on...
            </p>
          </div>

          <div className="card card1">
            <CardImage
              imageSrc={imageGrandKids}
              imageAlt="grandkids"
              imageHeading="My Stars"
              imageDescription="Nonni's Babies"
            />
          </div>
        </div>
        <div className="mainAbout">
          <div>
            <div className="card card1">
              <CardImage
                imageSrc={imageFamily}
                imageAlt="grandkidsfamily"
                imageHeading="My World"
                imageDescription="The Family"
              />
            </div>
            <div className="column2">
              <p>So how does any of this have to do with FrontEnd Web Dev? </p>
              <p>
                {" "}
                Well a few years ago I lost my job and well kind of fell into a
                slump.
              </p>
              <p>
                My son ,the youngest of the five and who is a senior programmer,
                noticed this and encouraged me to learn HTML and then I was
                hooked!
              </p>
              <p>
                {" "}
                I spent every day at the computer learning all I could. I got
                pretty good at HTML and CSS fairly quick, but then came
                javaScript!
              </p>
              <p>
                javaScript is not easy for me. I used countless tutorials, read
                books , listened to podcast , built sites and struggled through
                everyone of them.{" "}
              </p>
              <p>
                Now what kind of a role model would I be if I just gave up (and
                yes many times I thought about giving up!)?
              </p>
              <p>
                So I continue even now to expand my knowledge in not only
                javaScript but in frameworks and libraries that can help build
                awesome things.
              </p>

              <p>
                So this has been my journey to now. It has been exciting,
                educational, frustrating , meaningful, stressful, adventurous
                and difficult but also fun and challenging which makes it a
                journey well traveled!{" "}
              </p>
              <p>
                See My
                <a className = "resumeLink"href="https://hdnonni.github.io/Resume/resume.html">
                  Resume
                </a>{" "}
                Here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
