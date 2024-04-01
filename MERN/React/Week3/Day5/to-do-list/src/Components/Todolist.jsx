import React from "react";

const TodoList = ({ tasks, handleToggle, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(index)}
          />
          <span>{task.text}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
