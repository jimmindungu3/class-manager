// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function HomePage() {
  return (
    <section className="hero-section bg-dark text-white">
      <div className="container">
        <div className="hero-content text-center">
          <h1 className="display-4 mt-5 mb-4">Welcome to My Class App</h1>
          {/* <p className="mb-3">My Class App is designed with you in mind. My Class App will capture raw marks for your students and rank the students for you!</p> */}
          <p className="lead mb-3">Empowering Education, Inspiring Minds</p>
          <Link to="RegisterStudent" className="btn btn-light btn-lg mt-3 button">Register Student</Link>
          <Link to="Upload Marks" className="btn btn-light btn-lg mt-3 button">Upload Marks</Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
