import React from "react";
import PropTypes from 'prop-types';



function SmallCardImage(props) {
  return (
    
    <React.Fragment>
      <img className ="imageSizing"
        src={props.imageSource}
        alt={props.imageAlternative}
        // style="width:100%"
      ></img>
      <div className="smallContainer">
        <h4 className="imageHeading">
          {props.imageHead}
        </h4>
        <p className="imageDesc">{props.imageDescr}</p>
      </div>
    </React.Fragment>
    
  );
}
SmallCardImage.propTypes = {
  imageSource:PropTypes.string.isRequired,
  imageAlternative:PropTypes.string.isRequired,
  imageHead:PropTypes.string.isRequired,
  imageDescr:PropTypes.string.isRequired
}

export default SmallCardImage;