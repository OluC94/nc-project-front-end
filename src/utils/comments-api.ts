import spaceApi from "./api";

const fetchEventComments = (event_id: string) => {
  console.log(event_id);
  return spaceApi
    .get(`/events`)
    .then(({ data }) => {
      const [eventComms] = data.events.filter(
        (singleEvent: any) => singleEvent._id === event_id
      );
      return eventComms;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchEventComments;
