import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import CardImage from "./CardImage";
import imageGrandKids from "../assets/images/meAndMelsKids.jpg";
import "./Fun.css";

function Fun() {
  return (
    <div>
      <Nav />
      <h1 className="funHeading">Fun Stuff!</h1>
      <div className="contentFun">
        <div className="mainFun columnFun">
          <div className = "sectionOne">
          <h3> What I do For Fun</h3>
          <p>
            Fun is, according to "Merriam-Webster"Dictionary,what provides
            amusement or enjoyment
          </p>
          <p>
            That is different for everybody. What I call fun may not be your
            meaning of fun
          </p>
          </div>
          <p> So my rendition of fun...</p>
          <ul classname="funList">
            <li>Make exciting Websites</li>
            <li>Riding My Motorcycle</li>
            <li>Playing with my Grandkids
              <CardImage
              imageSrc={imageGrandKids}
              imageAlt="grandkids"
              imageHeading=""
              imageDescription=""
            /></li>
            
            <li>Sometimes work is fun!</li>
            <li>Going out with friends</li>
            <li>Playing in the dirt! (gardening)</li>
            <li>Completing projects</li>
            <li>Learning new stuff</li>
            <li>Cooking and Baking for the family</li>
            <li>Relaxing with a good book</li> 
          </ul>
        </div>
        <div className="mainFun columnFun2">
          <h3>Suggestions For Some Fun Things to do!</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fun;
