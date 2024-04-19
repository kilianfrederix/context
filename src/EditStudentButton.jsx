import { useState } from "react"
import Button from "./Button";
import { useContext } from "react";
import { StudentContext } from "./context/studentContext";


export default function EditStudentButton({ student }) {

    const { handleEditStudent } = useContext(StudentContext)

    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState(student.naam)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEditStudent(student.id, input)
        setIsEditing(false)
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setInput(student.naam)
    }

    if (isEditing) {
        return (
            <form style={{ display: "inline-block" }}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <input type="submit" value={"Save"} onClick={handleSubmit} />
                <button type="button" onClick={cancelEdit}>Cancel</button>
            </form>
        )
    }

    return (
        <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </>
    )
}   