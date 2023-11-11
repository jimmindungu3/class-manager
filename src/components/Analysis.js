import React, { useState, useEffect } from "react";

function Analysis() {
  const [students, setStudents] = useState([]);

  useEffect(function () {
    function fetchData() {
      fetch("http://localhost:8001/students")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then(function (data) {
          const updatedStudents = data.map(function (student) {
            const totalMarks = Object.values(student.marks).reduce(function (
              acc,
              mark
            ) {
              return acc + parseInt(mark);
            },
            0);
            return { ...student, totalMarks };
          });

          const sortedStudents = updatedStudents
            .filter(function (student) {
              return typeof student.totalMarks === "number";
            })
            .sort(function (a, b) {
              return b.totalMarks - a.totalMarks;
            });

          const rankedStudents = sortedStudents.map(function (student, index) {
            return { ...student, rank: index + 1 };
          });

          setStudents(rankedStudents);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error.message);
        });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Ranked Student List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Adm No</th>
            <th>Name</th>
            <th>Mathematics</th>
            <th>Science</th>
            <th>History</th>
            <th>English</th>
            <th>Art</th>
            <th>Total Marks</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map(function (student) {
              return (
                <tr key={student.id}>
                  <td>{student.admNo}</td>
                  <td>{`${student.firstName} ${student.lastName}`}</td>
                  <td>{student.marks.mathematics}</td>
                  <td>{student.marks.science}</td>
                  <td>{student.marks.history}</td>
                  <td>{student.marks.english}</td>
                  <td>{student.marks.art}</td>
                  <td>{student.totalMarks}</td>
                  <td>{student.rank}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="9">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Analysis;
