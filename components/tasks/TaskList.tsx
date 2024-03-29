import React, { useEffect } from 'react';
import { List } from 'react-native-paper';
import useTaskStore, { Task } from '../../store/task';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, getTasks } = useTaskStore()

    useEffect(() => {
        if (tasks.length < 0)
            getTasks()
    })

    console.log(tasks)

    return (
        <List.Section>
            {tasks.map((task: Task, index: number) => <TaskItem data={task} index={index}/>)}
        </List.Section>
    );
};

export default TaskList;