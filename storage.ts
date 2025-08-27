import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveData = async (key: string, value : any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)

    } catch (e) {
        console.error(`Error saving data : ${e}`)
    }
}

export const loadData = async <T>(key: string): Promise<T | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(`Error loading data : ${e}`)
        return null;
    }
}