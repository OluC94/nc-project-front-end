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
      return err.response.data;
    });
};

const addComment = (event_id: string, data: object) => {
  return spaceApi
    .post(`/events/${event_id}/comment`, data)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const deleteComment = (event_id: string, comment_id: string) => {
  return spaceApi.delete(`/events/${event_id}/${comment_id}`).catch((err) => {
    return err.response.data;
  });
};

export { fetchEventComments, addComment, deleteComment };
