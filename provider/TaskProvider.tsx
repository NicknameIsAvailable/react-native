import React, { createContext, ReactNode } from "react";
import useTaskStore, { TaskState } from "../store/task";

const TaskContext = createContext<TaskState | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const taskStore = useTaskStore();
  
    return <TaskContext.Provider value={taskStore}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
