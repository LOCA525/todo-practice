import { useState } from "react";

function TodoInput({ handleSubmit }) {
  const [userValue, setUserValue] = useState("");
  const handleChange = (e) => {
    setUserValue(e.target.value);
  };
  return (
    <form
      type="text"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(userValue);
        setUserValue("");
      }}
    >
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

export default TodoInput;
