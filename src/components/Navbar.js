import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link link-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="RegisterStudent" className="nav-link link-white">
              Register Student
            </Link>
          </li>
          <li className="nav-item">
            <Link to="UploadMarks" className="nav-link link-white">
              Upload Marks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Analysis" className="nav-link link-white">Analysis</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
