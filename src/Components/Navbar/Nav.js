import React from "react";
import "./Nav.css";
import { FaMotorcycle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export default function Nav() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="home.html">
            <FaMotorcycle className="logo" />
          </a>
          <h2 className="head1">Riders Republic</h2>
        </div>

        <div className="container2">
          <a className="logo-search">
            <FaSearch />
          </a>
          <a className="logo2">
            <FaRegUserCircle />
          </a>
          <a className="logo2">
            <FaGlobe />
          </a>

          <button className="btn">Download</button>
        </div>
      </nav>
    </>
  );
}
