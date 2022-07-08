import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <li className="todo-item">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <span className="none">{todo.name}</span>
      </label>
    </li>
  );
}
