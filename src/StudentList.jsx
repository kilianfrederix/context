import StudentListItem from "./StudentListItem";

export default function StudentList({students, onDeleteStudent, onEditStudent}) {

    if (students.length == 0) {
        return <p>No students</p>
    }

    return (
        <ul>
            {students.map(student => <StudentListItem 
                onDeleteStudent={onDeleteStudent}
                onEditStudent={onEditStudent}
                key={student.id} 
                student={student} 
            />)}
        </ul>
    )
}