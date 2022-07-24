/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div id="logo">
          <img src="../images/logo.webp" alt="foodies.com" />
        </div>
        <ul>
          <li className="item">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">Services</a>
          </li>
          <li className="item">
            <a href="#">About-us</a>
          </li>
          <li className="item">
            <a href="#">Contact-us</a>
          </li>
          <li>
            <a href="#">reservation</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
