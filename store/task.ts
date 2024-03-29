import { create } from "zustand";
import Storage from "../lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode } from "react";

export interface Task {
    name: string;
    description: string;
    rate: number;
    completed: boolean;
    date: Date;
}

export interface TaskState {
    tasks: Task[];
    getTasks: () => any;
    addTask: (task: Task) => void;
    completeTask: (index: number) => void;
}

const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    getTasks: async () => {
        let data: any;
        await AsyncStorage.getItem("tasks").then(response => data = JSON.parse(response || ""))
        set(() => {
            return { tasks: data }
        })
    },
    addTask: async (task) => {
        set((state) => {
            const existingTask = state.tasks.find((existing) => existing === task);
            if (existingTask) {
              return state;
            }
            const updatedTasks = [...state.tasks, task];
            Storage.saveData("tasks", updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    completeTask: (index) => set((state) => {
        const data = state.tasks.map((task, i) => i === index ? { ...task, completed: true } : task) 
        Storage.saveData("tasks", data)
        return { tasks: data }
})
}));

export default useTaskStore;