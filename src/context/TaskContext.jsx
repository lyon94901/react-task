import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvaider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(tasks); //total de tareas
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
