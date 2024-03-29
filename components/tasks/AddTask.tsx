import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { Appbar, Button, IconButton, Modal, Portal, SegmentedButtons, Snackbar, Text, TextInput } from 'react-native-paper';
import useTaskStore, { Task } from '../../store/task';

interface Inputs {
    name: string;
    description: string;
    date: Date;
    rate: number;
}

type snackBarData = {
    visible: boolean,
    text: string,
    label: string
}

const AddTask = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [rate, setRate] = useState<number>(1)
    const [date, setDate] = useState<Date | undefined>();
    const [dateOpen, setDateOpen] = useState<boolean>(false)
    const [snackBarData, setSnackBarData] = useState<snackBarData>({
        visible: false,
        text: "",
        label: ""
    })
    const { addTask } = useTaskStore()

    const handlePress = () => {
        setVisible(true)
    }

    const hideModal = () => {
        setVisible(false)
    }

    const onDismissSingle = () => {
        setDateOpen(false)
    }

    const onConfirmSingle = useCallback(
        (params: any) => {
          setDateOpen(false);
          setDate(params.date);
        },
        [setDateOpen, setDate]
      );

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    
    const onSubmit = (data: Inputs) => {
        try {
            const { name, description } = data
            const task: Task = {
                name, 
                description,
                rate,
                date: date || new Date(),
                completed: false
            }
            addTask(task)
            setSnackBarData({
                visible: true,
                text: "Задача добавлена",
                label: "Ок"
            })
            setVisible(false)
        } catch (error) {
            setSnackBarData({
                visible: true,
                text: "Произошла ошибка",
                label: "Блин"
            })
        }
    }
    
    const incrementRate = () => {
        if (rate > 0 && rate < 10)
            setRate(rate + 1)
    }

    const handleOpenDatePicker = () => {
        setDateOpen(true)
    }

    const decrementRate = () => {
        if (rate > 1 && rate <= 10)
            setRate(rate - 1)
    }

    return (
        <>
            <Portal>
                <Modal visible={visible} contentContainerStyle={styles.containerStyle} onDismiss={hideModal}>
                    <Text variant='displaySmall'>
                        Новая задача
                    </Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Название"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                        name="name"
                    />
                    {errors.name && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Описание"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                        name="description"
                    />
                    {errors.description && <Text>This is required.</Text>}
                    <View>
                        <Text variant="titleSmall">Оценка задачи</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <IconButton onPress={decrementRate} icon="minus" mode="contained" />
                            <Text variant='headlineSmall'>{rate}</Text>
                            <IconButton onPress={incrementRate} icon="plus" mode="contained" />
                        </View>
                    </View>
                    {errors.rate && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Text style={{marginBottom: 8}} variant="titleSmall">Крайняя дата выполнения</Text>
                                <Button onPress={handleOpenDatePicker} icon="calendar" mode='contained-tonal'>{date?.toDateString() || "Выбрать дату"}</Button>
                                <DatePickerModal
                                    locale="ru"
                                    mode="single"
                                    visible={dateOpen}
                                    onDismiss={onDismissSingle}
                                    date={date}
                                    onConfirm={onConfirmSingle}
                                />
                            </View>
                        )}
                        name="date"
                        defaultValue={date} 
                    />
                    {errors.date && <Text>This is required.</Text>}

                    <Button onPress={handleSubmit(onSubmit)} mode='contained'>Добавить</Button>
                </Modal>
            </Portal>
            <Appbar.Action icon="plus" onPress={handlePress} />
            <Snackbar
                visible={snackBarData.visible}
                onDismiss={() => setSnackBarData({...snackBarData, visible: false})}
                action={{
                    label: snackBarData.label,
                }}>
                {snackBarData.text}
            </Snackbar>
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
}

export default AddTask;