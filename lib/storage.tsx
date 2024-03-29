import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key: string, data: any) => {
    try {
        const jsonString = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonString);
        console.log('Объект успешно сохранен.');
        return data; 
    } catch (error) {
        console.log('Ошибка сохранения объекта: ', error);
        throw error;
    }
}

const getData = async (key: string) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return JSON.parse(data); 
        } else {
            return null; 
        }
    } catch (error) {
        console.log("Ошибка получения данных: ", error);
        throw error; 
    }
}

const Storage = {
    saveData,
    getData
}

export default Storage;
