import React from "react";
import "./Navbar.css";
import Tarkin from '/Empire/Tarkin.jpg'

export default function Navbar({searchValue, setSearchValue}) {
  return (
    <nav className="Navbar-Container">
      <div className="Navbar-Flex">
        <div className="Navbar-Lists">
          <img src={Tarkin} alt="" width={50} height={50}/>
          <input type="text" size={50} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
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
