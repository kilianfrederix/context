import { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

function App() {

  const [students, setStudents] = useState([{id:crypto.randomUUID(), naam: 'bert'}, {id:crypto.randomUUID(), naam: 'stef'}])

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id != id))
  }

  const handleAddStudent = (naam) => {
    setStudents([{id:crypto.randomUUID(), naam}, ...students])
  }

  const handleEditStudent = (id, newValue) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        student.naam = newValue
      }

      return student
    }))
  }

  return (
    <div>
      <h1>Studenten in mijn klas</h1>

      <AddStudentForm onSubmit={handleAddStudent} />

      <StudentList 
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent} 
        students={students} 
      />
    </div>
  );
}

export default App;
