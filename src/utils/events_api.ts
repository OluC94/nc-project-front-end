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

    let withImages = await getEventsImages(result.data.events);


    return withImages;
  } catch (error: any) {
    return error.response.data;
  }
};


const getEventsImages = (events) => {
  const promises = events.map(async (event) => {
    let images = await spaceApi(`/events/${event._id}/image`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      }
    });

    event.images = images.data.image;

    return event;
  });

  return Promise.all(promises);
}

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
