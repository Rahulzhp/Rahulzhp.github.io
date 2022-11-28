import React, { useEffect } from "react";
import "./About.css";

import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
const About=()=>{
   
      return (
        <div
          className="wrapper"
        >
          <div className="container">
            <Flip left>
              <div className="a-content">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I'm Rahul Das</p>
                <p className="a-desc">
                  Aspiring full Stack MERN Developer. I love to make
                  projects which are helpful for masses and serve 
                  as a great helpful entity.
                </p>
                <Bounce left>
                  <div className="connect-at">
                    <div className="connect-icon">
                      
                    </div>
                    <a href="mailto:abhishekskmr444@gmail.com">
                      rahulvck95@gmail.com
                    </a>
                  </div>
                </Bounce>
              </div>
            </Flip>
          </div>
        </div>
      );
}
export default About;