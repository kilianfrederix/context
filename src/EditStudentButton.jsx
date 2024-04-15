import { useState } from "react"
import Button from "./Button";


export default function EditStudentButton({student, onSubmit}) {

    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState(student.naam)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(student.id, input)
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <form style={{ display: "inline-block" }}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <input type="submit" value={"Save"} onClick={handleSubmit} />
            </form>
        )
    }
    
    return (
        <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </>
    )
}