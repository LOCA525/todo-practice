import React from "react";
import "./App.css";
import TodoInput from "./components/todoInput";

import TodoList from "./components/todoList";
import { useState, useRef } from "react";

function App() {
  const id = useRef(0);

  const [todoData, setTododata] = useState([]);
  const [sw, setSw] = useState(true);
  // () => {
  //   return JSON.parse(localStorage.getItem("todoData")) || [];
  // }

  const handleSubmit = (userValue) => {
    const nextTodoData = [...todoData, { content: userValue, id: id.current }];
    setTododata(nextTodoData);
    // localStorage.setItem("todoData", JSON.stringify(nextTodoData));
    id.current = id.current + 1;
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
