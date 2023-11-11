import React from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
// import AddMarks from './components/AddMarks'

function App() {
  return (
    <div className='container mt-5'>
      <div>
        <StudentForm />
        <StudentList />
        
      </div>
    </div>
  )
}

export default App