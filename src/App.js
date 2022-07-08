import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";
import "./css/style.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = "todoApp, todos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  // const listDone = document.querySelectorAll(".todo-item");
  // console.log(listDone);

  // listDone.forEach((trigger) => {
  //   trigger.addEventListener("click", (e) => {
  //     if (todos.complete == "true") {
  //       listDone.classList.add("checked");
  //     }
  //   });
  // });

  // Enter Add Event Listener
  // const inputAdd = document.querySelector(".todo-input");

  // inputAdd.addEventListener("keypress", (e) => {
  //   if (e.key === "Enter") {
  //     handleAddTodo();
  //   }
  // });

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="card">
        <h1 className="card-title">To Do List</h1>
        <p className="card-text">Remember to add new daily todoes.</p>
        <hr />

        <div className="input-field">
          <label className="todo-label">Add a todo</label>
          <div className="input-add">
            <input className="todo-input" ref={todoNameRef} type="text" />
            <button className="btn-add" onClick={handleAddTodo}>
              +
            </button>
          </div>
        </div>

        <p className="left-todo">
          {todos.filter((todo) => !todo.complete).length} left to do
        </p>

        <ul>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </ul>

        <button className="btn-clear" onClick={handleClearTodos}>
          Delete what is done
        </button>
      </div>
    </>
  );
}

export default App;
