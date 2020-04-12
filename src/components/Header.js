import React from "react";
import "./Header.css";
// this import logo works because image file in src folder not public
//import logo from '../nightskyBackground.png'

function Header() {
  return (
    <header>
      <h1 className = 'header'>HDNonni</h1>
      {/* <img src = {logo} alt = 'background'/>; */}
      
    </header>
  );
}

export default Header;
