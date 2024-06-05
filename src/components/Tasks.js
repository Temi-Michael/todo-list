import { useState } from "react"

export default function Tasks() {

    const [input, setInput] = useState('')
    const [list, setList] = useState([]);

    const handleAdd = () => {
        const newTask = {
            id: Math.random(),
            todo: input
        };

        setList([...list, newTask]);
        setInput('');
    };

    const handleDelete = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };



    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="todo">
            <h1>TO-DO LISTS</h1>
            <input className="input" type="text" value={input} onChange={handleInputChange} placeholder="Add Tasks...." />
            <button className="btn" onClick={handleAdd}>ADD</button>

            <ul>
                {list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDelete(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    )
};
