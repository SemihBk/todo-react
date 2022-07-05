import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(...);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Input-Searchbar">
          <input className="input-add" type="text"></input>
          <button className="btn-add">Add</button>
        </div>
        <h3 className="todo-title">To DO List</h3>
        <p className="todo-description">Here things you have to do.</p>

        {/* first-try-code */}
        {/* <ul className="todo-list">
          <li className="todo-list-item">
            <input type="checkbox" /> First to do
          </li>
          <li className="todo-list-item">
            <input type="checkbox" /> Second to do
          </li>
        </ul> */}

        {/* second-try-code */}
        {/* <ul className="todo-list">
          {todos.map((todo) => (
            <li>
              <input className="todo-list-item" type="checkbox" /> {todo}
            </li>
          ))}
        </ul> */}

        <ul className="todo-list">
          {todos.map((todo) => (
            <li>
              <input type="checkbox" /> {todo}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
