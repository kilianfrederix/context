import { useContext } from "react";
import StudentListItem from "./StudentListItem";
import { StudentContext } from "./context/studentContext";

export default function StudentList() {

    const { students } = useContext(StudentContext)

    if (students.length == 0) {
        return <p>No students</p>
    }

    return (
        <ul>
            {students.map(student => <StudentListItem
                key={student.id}
                student={student}
            />)}
        </ul>
    )
}