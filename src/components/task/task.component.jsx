import React from "react";
import "./task.styles.scss";

const Task = ({ index, task, toggler, handleDelete, handleEdit }) => {
  return (
    <li className={`task-item ${task.deleting}`}>
      <span
        className={task.isComplete ? "completed" : ""}
        onClick={() => toggler(index)}
      >
        {task.task}
      </span>
      <div className="action-btn">
        <button className="edit-btn" onClick={() => handleEdit(task)}>
          Edit
        </button>
        <button
          onClick={() => handleDelete(index, task)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
