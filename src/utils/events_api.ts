import { AsyncStorage } from "react-native";
import spaceApi from "./api";

export const event_list = async () => {
  try {
    let token = await AsyncStorage.getItem("key");
    const result = await spaceApi("/events", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const event_post = async data => {
    try {
        const result = await spaceApi('/events', {
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

export const addInterest = async (event_id: string, username: string) => {
  try {
    const result = await spaceApi.post(
      `/events/${event_id}/${username}/interested`
    );
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
