import { useState, useEffect, useRef } from "react";

export default function Tasks() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const enterInput = (e) => {
    if(e.key === 'Enter') {
        handleAdd()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAdd = () => {
    const newTask = {
      id: Math.random(),
      todo: input,
    };
    if (input.length > 3) {
      setList([...list, newTask]);
      setInput("");
    } else {
      alert(
        `Make sure your task item has more than 3 words to easily identify task.`
      );
    }
    inputRef.current.focus();
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
      <input
        className="input"
        type="text"
        value={input}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={enterInput}
        placeholder="Add Tasks...."
      />
      <button className="btn" onClick={handleAdd}>
        ADD
      </button>

      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
