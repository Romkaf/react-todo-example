import React from "react";

import "./style.css";

const TodoItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}) => {
  let todoClassNames = done ? "todo-list-item done" : "todo-list-item";

  if (important) {
    todoClassNames += " important";
  }

  return (
    <span className={todoClassNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoItem;
