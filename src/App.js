import React from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

function App() {
  return (
    <div className='container mt-4'>
      <div>
        <StudentForm />
        <StudentList />
      </div>
    </div>
  )
}

export default App