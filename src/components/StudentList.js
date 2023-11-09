import React, { useState, useEffect } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Adm No</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.admNo}>
              <td>{student.admNo}</td>
              <td>
                {student.firstName} {student.lastName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
