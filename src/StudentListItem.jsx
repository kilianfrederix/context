import StudentListActions from './StudentListActions'

export default function StudentListItem({ student }) {
    return (
        <li>
            {student.naam} {' '}
            <StudentListActions
                student={student}
            />
        </li>
    )
}