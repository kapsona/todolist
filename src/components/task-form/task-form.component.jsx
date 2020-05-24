import React from "react";
import "./task-form.styles.scss";

const TaskForm = ({ task, handleChange, saveTask }) => {
  return (
    <div className="inputForm">
      <form onSubmit={saveTask}>
        <input
          type="text"
          name="task"
          className="taskInput"
          value={task}
          onChange={handleChange}
          placeholder="Enter task here..."
        />
        <button className="saveBtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
