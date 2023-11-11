import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="RegisterStudent"
              element={<RegistrationForm />}
            ></Route>
            <Route path="UploadMarks" element={<StudentList />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
