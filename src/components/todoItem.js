import { useState } from "react";

function TodoItem({ item, onRemove }) {
  const [sw, setSw] = useState(true);
  const handleDeleteClick = () => {
    onRemove(item.id);
  };
  const handleEditClick = (e) => {
    setSw(false);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("dfaeaf");
    setSw(true);
  };

  return (
    <div onClick={handleEditClick} id={item.id}>
      {sw && (
        <div className="todoList" id={item.id}>
          <div className="contentBox" id={item.id}>
            {item.content}
          </div>
          <button className="delBtn" onClick={handleDeleteClick}>
            ⓧ
          </button>
        </div>
      )}
      {!sw && (
        <form className="editForm" type="text" id={item.id} onSubmit={handleEditSubmit}>
          <input type="text" placeholder="EDIT!" className="editBox" id={item.id}></input>
        </form>
      )}
    </div>
  );
}

export default TodoItem;
