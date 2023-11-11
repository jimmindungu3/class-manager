import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Class List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Analysis
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Register Student
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
