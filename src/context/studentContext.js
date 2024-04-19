import { createContext, useState } from "react";

export const StudentContext = createContext(null)

export function StudentProvider({ children }) {

    const [students, setStudents] = useState([{ id: crypto.randomUUID(), naam: 'bert' }, { id: crypto.randomUUID(), naam: 'stef' }])

    const handleAddStudent = (naam) => {
        const newStudent = { id: crypto.randomUUID(), naam }
        setStudents([newStudent, ...students])
    }

    const handleDeleteStudent = (id) => {
        setStudents(students.filter(student => student.id != id))
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
        <StudentContext.Provider value={{
            students, handleAddStudent, handleDeleteStudent, handleEditStudent
        }}>
            {children}
        </StudentContext.Provider>

    )
}

