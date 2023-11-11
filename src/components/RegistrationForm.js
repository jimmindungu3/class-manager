import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [admNo, setAdmNo] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      admNo: admNo,
    };

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
    <div className="container mt-4">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="admNo" className="form-label">
            Adm No:
          </label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="Enter Adm No"
            onChange={(e) => setAdmNo(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
