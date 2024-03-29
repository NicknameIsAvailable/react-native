import React, { useState } from 'react';
import useTaskStore, { Task } from '../../store/task';
import { Badge, List, Button, Modal, Portal, Text, Chip } from 'react-native-paper';
import { View } from 'react-native';

interface Props {
    data: Task;
    index: number;
}

const TaskItem: React.FC<Props> = ({ data, index }) => {
    const [visible, setVisible] = useState<boolean>(false)
    
    const { completeTask } = useTaskStore()

    const openModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    const handleComplete = () => completeTask(index)

    return (
        <>
            <Portal>
                <Modal contentContainerStyle={styles.containerStyle} visible={visible} onDismiss={hideModal}>
                    <Text variant="titleLarge">{data.name}</Text>
                    <Text variant="bodyLarge">{data.description}</Text>
                    <View>
                        <Chip icon="star">
                            {data.rate}
                        </Chip>
                    </View>
                    <Button onPress={handleComplete}>Пометить как выполненное</Button>
                </Modal>
            </Portal>
            <List.Item title={data.name} description={String(data.date)} right={props => data.completed ? <List.Icon icon="done"/> : <Button onPress={openModal}>Выполнить</Button>}/>                
        </>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: 'white', 
        padding: 16, 
        margin: 16, 
        gap: 12
    },
    rate: {
        alignItems: "start",
        justifyContent: "start"
    }
}

export default TaskItem;