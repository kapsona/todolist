import React from "react";
import "./task-list.styles.scss";

import Task from "../task/task.component";

const TaskList = ({ tasks, toggler, handleDelete, handleEdit }) => {
  return (
    <div>
      {tasks.length >= 1 ? (
        <h3>My tasks list</h3>
      ) : (
        <div>You don't have any todo list</div>
      )}

      <ul className="task-list">
        {tasks.map((tas, indx) => {
          return (
            <Task
              index={indx}
              task={tas}
              toggler={toggler}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
