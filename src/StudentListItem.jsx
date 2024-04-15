import StudentListActions from './StudentListActions'

export default function StudentListItem({student, onDeleteStudent, onEditStudent}) {
    return (
        <li>
            {student.naam} {' '}
            <StudentListActions
                student={student}
                onEditStudent={onEditStudent}
                onDeleteStudent={() => onDeleteStudent(student.id)}
            />
        </li>
    )
}