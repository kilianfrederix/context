import Button from "./Button";
import EditStudentButton from "./EditStudentButton";

export default function StudentListActions({student, onDeleteStudent, onEditStudent}) {
    
    return (
        <>
            <Button onClick={onDeleteStudent}>Delete</Button>
            <EditStudentButton student={student} onSubmit={onEditStudent} />
        </>
    )
}