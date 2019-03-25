import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src="./logo1.png" className="logo" alt="logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>

            <li>
              <Link to="/listings">LISTINGS</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/tinyhouse">TINY HOUSE WITH VIEW</Link>
                </li>
                <li>
                  <Link to="/oldhouse">OLD FAMILY HOUSE</Link>
                </li>
                <li>
                  <Link to="/familyhouse">FAMILY HOUSE WITH GARDEN</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
