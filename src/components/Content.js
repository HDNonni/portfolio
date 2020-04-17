import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="journeyBckgrd">
      <h2 className="welcome">Welcome To My Journey</h2>
      <div className="content">
        <main>
          <article>
            <div>
              {" "}
              This is where main content goes
              <p></p>
              <p></p>
            </div>
          </article>
        </main>
        <div className="sidebar">
          <aside>
            <div>
              This is the sidebar
              <p>Random stuff to see whats going on</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
export default Content;
