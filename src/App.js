import React from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import NavBar from "./components/Navbar";
import Home from "./components/Home"

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div>
          <Home />
          <StudentForm />
          <StudentList />
        </div>
      </div>
    </div>
  );
}

export default App;
