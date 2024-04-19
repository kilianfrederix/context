import { useContext } from "react";
import Button from "./Button";
import EditStudentButton from "./EditStudentButton";
import { StudentContext } from "./context/studentContext";

export default function StudentListActions({ student }) {

    const { handleDeleteStudent } = useContext(StudentContext)

    const onDeleteStudent = () => handleDeleteStudent(student.id)

    return (
        <>
            <Button onClick={onDeleteStudent}>Delete</Button>
            <EditStudentButton student={student} />
        </>
    )
}