import { useState } from "react";

function TodoItem({ item, onRemove }) {
  const [sw, setSw] = useState(true);
  const [editValue, setEditValue] = useState("");
  const handleDeleteClick = () => {
    onRemove(item.id);
  };
  const handleEditClick = (e) => {
    setSw(false);
  };
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };
  const handleEditSubmit = (e) => {
    if (editValue !== "") {
      e.preventDefault();
      setSw(true);
      item.content = editValue;
    }
  };

  return (
    <div id={item.id}>
      {sw && (
        <div className="todoList" id={item.id}>
          <div className="contentBox" id={item.id} onClick={handleEditClick}>
            {item.content}
          </div>
          <button className="delBtn" onClick={handleDeleteClick}>
            ⓧ
          </button>
        </div>
      )}
      {!sw && (
        <form className="editForm" type="text" id={item.id} onSubmit={handleEditSubmit}>
          <input
            type="text"
            placeholder="EDIT!"
            className="editBox"
            id={item.id}
            value={editValue}
            onChange={handleEditChange}
          ></input>
        </form>
      )}
    </div>
  );
}

export default TodoItem;
