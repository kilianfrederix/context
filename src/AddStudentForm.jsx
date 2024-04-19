import { useContext } from "react"
import { useState } from "react"
import { StudentContext } from "./context/studentContext"

export default function AddStudentForm() {

    const { handleAddStudent } = useContext(StudentContext)

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddStudent(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Naam' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type="submit" value="Toevoegen" />
        </form>
    )
}