import React from "react";
import "./App.css";

import { useState, useRef } from "react";

function App() {
  const [userValue, setUserValue] = React.useState("");
  const [todoData, setTododata] = React.useState(() => {
    return JSON.parse(localStorage.getItem("todoData")) || [];
  });
  const id = useRef(0);

  const handleChange = (e) => {
    setUserValue(e.target.value);
  };
  const handleSubmit = () => {
    const nextTodoData = [...todoData, { content: userValue, id: id.current }];
    setTododata(nextTodoData);
    localStorage.setItem("todoData", JSON.stringify(nextTodoData));
    setUserValue("");
    id.current = id.current + 1;
  };

  // const onRemove = (id) => {
  //   const filteredData = todoData.filter((item) => item.id !== id);
  //   setTododata(filteredData);
  //   localStorage.setItem("todoData", JSON.stringify(todoData));
  // };
  // const handleDeleteClick = (item, onRemove)  => {
  //   onRemove(item.id);
  // };

  function TodoList() {
    const onRemove = (id) => {
      const filteredData = todoData.filter((item) => item.id !== id);
      setTododata(filteredData);
      localStorage.setItem("todoData", JSON.stringify(filteredData));
    };
    return (
      <ul className="todoBox">
        {todoData.map((item, index) => (
          <TodoItem item={item} key={index} onRemove={onRemove} />
        ))}
      </ul>
    );
  }

  function TodoItem({ item, onRemove }) {
    const handleDeleteClick = () => {
      onRemove(item.id);
    };

    const handleEditClick = () => {
      prompt("씨발년아");
    };
    return (
      <div className="todoList" onClick={handleEditClick}>
        {item.content}
        <button className="delBtn" onClick={handleDeleteClick}>
          ⓧ
        </button>
      </div>
    );
  }

  function TodoInput({ handleChange, handleSubmit, userValue }) {
    return (
      <form type="text" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          onChange={handleChange}
          type="text"
          placeholder="Enter!"
          value={userValue}
          autoFocus
        ></input>
      </form>
    );
  }

  return (
    <div className="container">
      <h2 className="title">LOCA's !</h2>
      <TodoInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userValue={userValue}
        setUserValue={setUserValue}
      />

      <TodoList userValue={userValue} />
    </div>
  );
}

export default App;
