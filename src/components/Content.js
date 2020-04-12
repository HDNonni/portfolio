import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className = "content">
    <main>
        <article>
      <div> This is where main content goes
          <p></p>
          <p></p>
      </div>
      </article>
    </main>
    <div className = "sidebar">
        <aside>
            <div>
                This is the sidebar

            </div>
        </aside>
    </div>
    </div>
  );
}
export default Content;
