import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md';

import "./Navbar.css";


import Flip from "react-reveal/Flip";

const Navbar = () => {
  const [drawer, setDrawer] = useState(true);
  return (
    <div className="wrapper-n">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="logo">
            <Link to="intro" smooth={true}>
              <h2 style={{width:"190px",color:"white",paddingLeft:"175px", fontFamily:"cursive"}}>Rahul Das</h2>
              
              
            </Link>
          </div>
        </div>
        <div className="n-right">
          <div className="mobile-menu">
            {!drawer ? (
              <div onClick={() => setDrawer(true)} className="menu-icon">
               

              </div>
            ) : (
              <Flip right>
                <div className="menu-list">
                  <div onClick={() => setDrawer(false)} className="close">

                  </div>
                  <ul>
                    <li>
                      <Link activeClass="active" to="intro" smooth={true} spy>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="about" smooth={true} spy>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        spy
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="projects"
                        smooth={true}
                        spy
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        spy
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </Flip>
            )}
          </div>
          <ul>
            <li>
              <Link activeClass="active" to="intro" smooth={true} spy>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" smooth={true} spy>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" smooth={true} spy>
                Skills
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" smooth={true} spy>
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" smooth={true} spy>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
