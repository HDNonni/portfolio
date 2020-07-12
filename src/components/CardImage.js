import React from "react";
import PropTypes from 'prop-types';



function CardImage(props) {
  return (
 
    <div className = "imageContainer">
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        // style="width:100%"
      ></img>
      <div className="container">
        <h4 className="imageHeading">
          {props.imageHeading}
        </h4>
        <p className="imageDesc">{props.imageDescription}</p>
      </div>
      </div>
  
    
  );
}
CardImage.propTypes = {
  imageSrc:PropTypes.string.isRequired,
  imageAlt:PropTypes.string.isRequired,
  imageHeading:PropTypes.string.isRequired,
  imageDescription:PropTypes.string.isRequired
}

export default CardImage;