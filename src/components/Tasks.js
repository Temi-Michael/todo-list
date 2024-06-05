import { useState } from "react"

export default function Tasks(params) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("")
        console.log(input)

    }

    return (
        <div className="todo">
            <h1>TO-DO LISTS</h1>
            <input type='text' value={input} placeholder="Add item..." className="taskInput" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" id="submit" onClick={handleSubmit}>Add Task</button>
        </div>
    )
};
