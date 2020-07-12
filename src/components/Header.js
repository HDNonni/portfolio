import React from "react";
import "./Header.css";

// this import logo works because image file in src folder not public
//import logo from '../nightskyBackground.png'

function Header() {
  return (
    <header className = "header">
   
      <h1 className ="titleMain">HDNonni</h1>
      <p className = 'headerAddition'>"Life is a journey, not a destination." <sub>Ralph Waldo Emerson</sub></p>
      {/* <img src = {logo} alt = 'background'/>; */}
      
    </header>
  );
}

export default Header;
