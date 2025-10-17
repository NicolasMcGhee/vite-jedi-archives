import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="Navbar-Container">
      <div className="Navbar-Flex">
        <div className="Navbar-Lists">
          <ul>
            <li>Home</li>
            <li>Company</li>
            <li>News</li>
          </ul>
        </div>
        <div className="Navbar-Lists">
          <ul>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
