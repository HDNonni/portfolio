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
              <div className = 'main-content'>
              <p>One of my favorite sayings is from Theodore Roosevelt. He said <span className = 'quote'>"Nothing Worth Having Comes Easy"</span> and wow was he right.</p>
              <p>This journey that I embarked on to learn programming has proven those words over and over again. But not only this journey but 
                the many my life has taken me on.
              </p>
              <p>But here I am remaking my portfolio in React and loving every minute learning about the awesome things React has to offer.
              </p>
              <p>So take a look around and check out some of the projects I have done. And I say done, not all completed , but I have so many ideas and unfortunatly not as much time. 
                All in all there are some interesting things to see and explore.
              </p>
              <p className = 'welcomeLine'>Welcome to my Journey, hope you like what you see!</p>
              </div>
            </div>
          </article>
        </main>
        <div className="sidebar">
          <aside>
            <div>
             
              <p>Random stuff to see whats going on</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
export default Content;
