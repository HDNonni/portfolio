import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerDiv">
      <table>
        <tbody className="footerStyle">
          <tr>
            <td>
              <a href="" alt="Home Page">
                Home
              </a>
            </td>
            <td>
              <a href="">My Projects</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href=""> About Me</a>
            </td>
            <td>
              <a href="">Fun Stuff</a>
            </td>
            <td className="copyWrite">&copy; HDNonni 2020.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Footer;
