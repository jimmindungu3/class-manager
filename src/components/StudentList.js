
import React, { useState, useEffect } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [studentMarks, setStudentMarks] = useState({});

  useEffect(() => {
    fetch("http://localhost:8001/students")
      .then((response) => response.json())
      .then((data) => {
        const initialMarks = {};
        data.forEach((student) => {
          initialMarks[student.id] = {
            mathematics: "",
            science: "",
            history: "",
            english: "",
            art: "",
          };
        });
        setStudentMarks(initialMarks);
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleInputChange(studentId, subject, value) {
    setStudentMarks((prevMarks) => ({
      ...prevMarks,
      [studentId]: {
        ...prevMarks[studentId],
        [subject]: value,
      },
    }));
  }

  function handleClick(id) {
    console.log("Clicked for student ID:", id);

    const studentMarksToUpdate = studentMarks[id];
    console.log("Marks to update:", studentMarksToUpdate);

    // Construct a new student object with updated marks
    const updatedStudent = {
      ...students.find((student) => student.id === id),
      marks: {
        ...students.find((student) => student.id === id).marks,
        ...studentMarksToUpdate,
      },
    };

    // Sending the updated student to the server
    fetch(`http://localhost:8001/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((response) => response.json())
      .then((returnedStudent) => {
        console.log("Student updated successfully:", returnedStudent);

        // Optionally, you can update the local state or perform any additional actions
      })
      .catch((error) => {
        console.error("Error updating student:", error);

        // Optionally, you can handle errors here
      });
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
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={studentMarks[student.id].mathematics}
                  onChange={(e) =>
                    handleInputChange(student.id, "mathematics", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={studentMarks[student.id].science}
                  onChange={(e) =>
                    handleInputChange(student.id, "science", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={studentMarks[student.id].history}
                  onChange={(e) =>
                    handleInputChange(student.id, "history", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={studentMarks[student.id].english}
                  onChange={(e) =>
                    handleInputChange(student.id, "english", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={studentMarks[student.id].art}
                  onChange={(e) =>
                    handleInputChange(student.id, "art", e.target.value)
                  }
                />
              </td>
              <td>
                <span
                  className="btn btn-primary"
                  onClick={() => handleClick(student.id)}
                >
                  Upload
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
