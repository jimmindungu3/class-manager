import { useState } from "react";

function StudentForm() {
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [admNo, setAdmNo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      firstName: firsName,
      lastName: lastName,
      admNo: admNo,
    };

    // console.log(newStudent);

    fetch("http://localhost:8001/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFirstName("");
        setLastName("");
        setAdmNo();
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          placeholder="Enter first name"
          value={firsName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="LastName">Last Name:</label>
        <input
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="Adm No">Adm No: </label>
        <input
          type="number"
          placeholder="Enter Adm No"
          onChange={(e) => setAdmNo(e.target.value)}
        />

        <button>Add Student</button>

      </form>
    </div>
  );
}

export default StudentForm;
