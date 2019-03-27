import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src="/logo1.png" className="logo" alt="logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>

            <li>
              <Link to="/listings">Listings</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/apartmentdetails/1">Tiny House With a View</Link>
                </li>
                <li>
                  <Link to="/apartmentdetails/2">
                    Renovated Old Family House
                  </Link>
                </li>
                <li>
                  <Link to="/apartmentdetails/3">Family House</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
