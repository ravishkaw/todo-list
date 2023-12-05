import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, addTodoList] = useState([]);
  const [todoItem, addTodoItem] = useState("");

  function handleClick() {
    addTodoList((prevValue) => {
      return [...prevValue, todoItem];
    });

    addTodoItem("");
  }

  function handleChange(event) {
    addTodoItem(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todoItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
