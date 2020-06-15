import React from "react";
import PropTypes from "prop-types";
import styles from "./smallCardImage.module.css";

function SmallCardImage(props) {
  return (
    // <React.Fragment>
    <div>
      <div>
        <a href={props.imageLink} rel="noopener noreferrer" target="_blank">
          <img
            className={styles.imageSizing}
            src={props.imageSource}
            alt={props.imageAlternative}
          ></img>
        </a>
      </div>
      <div className="smallContainer">
        <h4 className="imageHeading">{props.imageHead}</h4>
        <p className="imageDesc">{props.imageDescr}</p>
      </div>
    </div>
    //</React.Fragment>
  );
}
SmallCardImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlternative: PropTypes.string.isRequired,
  imageHead: PropTypes.string.isRequired,
  imageDescr: PropTypes.string.isRequired,
};

export default SmallCardImage;
