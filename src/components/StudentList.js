import React, { useState, useEffect, useTransition } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [mathematics, setMathematics] = useState();
  const [science, setscience] = useState();
  const [history, setHistory] = useState();
  const [english, setEnglish] = useState();
  const [art, setArt] = useState()


  useEffect(() => {
    fetch("http://localhost:8001/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick(id) {
    console.log(id);
    // update student marks here

    const studentMarks = {
      mathematics: mathematics,
      science: science,
      history: history,
      english: english,
      art: art
    }

    console.log(studentMarks);




  }

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Adm No</th>
            <th>Student</th>
            <th>Mathematics</th>
            <th>Science</th>
            <th>History</th>
            <th>English</th>
            <th>Art</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.admNo}>
              <td>{student.admNo}</td>
              <td>
                {student.firstName} {student.lastName}
              </td>
              <td><input type="number" className="form-control" value={mathematics} onChange={(e) => setMathematics(e.target.value)}/></td>
              <td><input type="number" className="form-control" value={science} onChange={(e) => setscience(e.target.value)} /></td>
              <td><input type="number" className="form-control" value={history} onChange={(e) => setHistory(e.target.value)} /></td>
              <td><input type="number" className="form-control" value={english} onChange={(e) => setEnglish(e.target.value)} /></td>
              <td><input type="number" className="form-control" value={art} onChange={(e) => setArt(e.target.value)} /></td>
              <td><span className="btn btn-primary" onClick={() => handleClick(student.id)}>Upload </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
