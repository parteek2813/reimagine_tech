import React, { useState } from "react";
import Login from "./Login";
import Main from "./Main";
import logo from "../assets/images/bit_logo.webp";
import { Link, redirect } from "react-router-dom";

function Navbar({ showLogout, showNavs, showUsername, userInfo }) {
  return (
    <div className="navbar">
      <Link to="/" className="link_logo">
        <img src={logo} className="logo"></img>
      </Link>
      <nav className="navbar_links">
        {showNavs ? (
          ""
        ) : (
          <>
            <Link to="/">About Us</Link>
            <Link to="/">Our Team</Link>
            <Link to="/">Solutions</Link>
            <Link to="/">Press Room</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Blog</Link>
            <Link to="/">More</Link>
          </>
        )}

        {showUsername ? userInfo.name : ""}
        {showLogout ? <Link to="/">LOG OUT</Link> : ""}
      </nav>
    </div>
  );
}

export default Navbar;
