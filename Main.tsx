import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import TaskList from './components/tasks/TaskList';

const Main = () => {
    return (
        <View>
            <Text variant="displaySmall">Твои задачи</Text>
            <TaskList />
        </View>
    );
};

export default Main;