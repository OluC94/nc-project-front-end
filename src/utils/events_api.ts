import { AsyncStorage } from "react-native";
import spaceApi from "./api";

export const event_list = async () => {
    try {
        let token = await AsyncStorage.getItem('key');
        const result = await spaceApi('/events', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        });
        return result;
    } catch (error: any) {
        return error.response.data
    };
};

export const event_post = async data => {
    try {
        const result = await spaceApi('/event/add_event', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            data: data
        });
        return result;
    } catch (error: any) {
        return error.response.data
    }
};

