import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoQuery, setTodoQuery] = useState("");

  function handleAdd(e) {
    e.preventDefault();

    if (!todoQuery) return;

    setTodos([...todos, { id: crypto.randomUUID(), desc: todoQuery }]);
    setTodoQuery("");
  }

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.desc}</li>
            <span onClick={() => handleRemove(todo.id)}>&#10005;</span>
          </div>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="add a todo"
          value={todoQuery}
          onChange={(e) => setTodoQuery(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}
