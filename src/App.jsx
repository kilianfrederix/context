import './App.css';
import { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

function App() {

  return (
    <div>
      <h1>Studenten in mijn klas</h1>
      <AddStudentForm />
      <StudentList />
    </div>
  );
}

export default App;
