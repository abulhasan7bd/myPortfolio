import React from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
const Navbar = () => {
  return (
    // navbar
    <nav>
      <div className="container">
        <div className="navbar__header">
          <div className="logo">
            <h2>portfolio.</h2>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  abou
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  service
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
