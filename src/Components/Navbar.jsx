import React from "react";
import "./Navbar.css";
import Tarkin from "/Empire/Tarkin.jpg";

export default function Navbar() {
  return (
    <nav className="Navbar-Container">
      <section className="Navbar-Flex">
        <div className="Navbar-Left">
          <h1>LOGO</h1>
          <p>FIND ANYTHING</p>
        </div>
        <div className="Navbar-Right">
          <div className="hover-underline">
            <span>SAY HELLO</span>
          </div>
          <div className="hover-underline">
            <span>PROJECTS</span>
          </div>
          <div className="hover-underline">
            <span>MENU</span>
          </div>
        </div>
      </section>
    </nav>
  );
}
