import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { EventContext } from "../contexts";
import {
  Button,
  CamAccess,
  CommentList,
  EventCard,
  Input,
} from "../components";
import { sampleData } from "../utils";
import { UserContext } from "../contexts/UserContext";
import { event_list } from "../utils/events_api";

const Event: FC = (props) => {
  const [newComm, setNewComm] = useState<string | null>(null);
  const { eventID } = useContext(EventContext);
  const { username } = useContext(UserContext);
  const [eventToDisplay, setEventToDisplay] = useState([])

  useEffect(() => {
    event_list().then(x => {
      console.log('event_list', x);
      let event = x.data.events.filter(
        (dataPoint: any) => dataPoint._id === eventID
      )[0];
      console.log('event', event)
      setEventToDisplay(event)
    })
  }, []);


  const handleAddInterest = async () => {
    // implement method that adds event to user's interests
    alert("This event has been added to your list of interests");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Event Title: {eventToDisplay.event_name}</Text>
        <Text>Date: {eventToDisplay.createdAt}</Text>
        <Text>Event Details {eventToDisplay.details}</Text>
        <Text>etc...</Text>
      </View>
      <View>
        <Button title="Notify Me" onPress={handleAddInterest} />
      </View>
      <CamAccess />
      <View>
        <CommentList />
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
