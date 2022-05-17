import React from "react";
import "./App.css";
import TodoInput from "./components/todoInput";

import TodoList from "./components/todoList";
import { useState, useRef } from "react";

function App() {
  const id = useRef(0);

  const [todoData, setTododata] = useState([]);

  // () => {
  //   return JSON.parse(localStorage.getItem("todoData")) || [];
  // }

  const handleSubmit = (userValue) => {
    if (userValue !== "") {
      const nextTodoData = [...todoData, { content: userValue, id: id.current }];
      setTododata(nextTodoData);
      id.current = id.current + 1;
    }
    // localStorage.setItem("todoData", JSON.stringify(nextTodoData));
  };

  return (
    <div className="container">
      <h2 className="title">LOCA's !</h2>
      <TodoInput handleSubmit={handleSubmit} />

      <TodoList todoData={todoData} setTododata={setTododata} />
    </div>
  );
}

export default App;
