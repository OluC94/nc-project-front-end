import spaceApi from "./api";

const fetchEventComments = (event_id: string) => {
  return spaceApi
    .get(`/events`)
    .then(({ data }) => {
      const [eventComms] = data.events.filter(
        (singleEvent: any) => singleEvent._id === event_id
      );
      return eventComms;
    })
    .catch((err) => {
      return err;
    });
};

const addComment = (event_id: string, data: object) => {
  return spaceApi
    .post(`/events/${event_id}/comment`, data)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export { fetchEventComments, addComment };
