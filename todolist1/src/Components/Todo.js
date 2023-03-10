import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        Delete
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
};

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Pizza",
      completed: true,
    },
    {
      title: "Burger",
      completed: false,
    },
    {
      title: "Sandwich",
      completed: true,
    },
  ]);
  //   console.log("Tasks are =>", tasks, tasks[0])
  const [tasksRemaining, setTasksRemaining] = useState(0);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

    useEffect(() => {
        setTasks(tasks)
    });
  return (
    <>
      <div className="todo-container">
        {/* <div className="header"> TODO-ITEMS</div> */}
        <div className="header">Pending tasks ({tasksRemaining})</div>
        <div className="tasks">
          {tasks.map((task, index) => {
            return (
              <Task
                task={task}
                index={index}
                key={index}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            );
            {
              /* If we not use return keyword we will not get items. */
            }
          })}
        </div>
        {/* <AddTodo /> */}
        <div className="create-task">
          <AddTodo addTask={addTask} />
        </div>
      </div>
    </>
  );
};

export default Todo;
