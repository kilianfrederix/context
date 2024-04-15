import { useState } from "react"

export default function AddStudentForm({onSubmit}) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Naam' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type="submit" value="Toevoegen" />
        </form>
    )
}