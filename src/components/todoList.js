import TodoItem from "./todoItem";

function TodoList({ todoData, setTododata }) {
  const onRemove = (id) => {
    const filteredData = todoData.filter((item) => item.id !== id);
    setTododata(filteredData);
    // localStorage.setItem("todoData", JSON.stringify(filteredData));
  };

  return (
    <ul className="todoBox">
      {todoData.map((item, index) => (
        <TodoItem item={item} key={index} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default TodoList;
