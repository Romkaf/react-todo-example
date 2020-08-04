import React from "react";
import TodoItem from "../todo-item";
import "./style.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <TodoItem
          label={item.label}
          important={item.important}
          done={item.done}
          onDeleted={() => onDeleted(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
