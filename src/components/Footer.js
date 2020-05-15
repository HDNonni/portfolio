import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerDiv">
      <table>
        <tbody className="footerStyle">
          <tr>
            <td>
              <a href="/" alt="Home Page">
                Home
              </a>
            </td>
            <td>
              <a href="/projects">My Projects</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/about"> About Me</a>
            </td>
            <td>
              <a href="/fun">Fun Stuff</a>
            </td>
            <td className="copyWrite">&copy; HDNonni 2020.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Footer;
