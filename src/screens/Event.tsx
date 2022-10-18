import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { EventContext } from "../contexts";
import {
  Button,
  CamAccess,
  CommentList,
  EventCard,
  Input,
} from "../components";
import { UserContext } from "../contexts/UserContext";
import { addInterest, event_list } from "../utils/events_api";

const Event: FC = (props) => {
  const [newComm, setNewComm] = useState<string | null>(null);
  const { eventID } = useContext(EventContext);
  const { username } = useContext(UserContext);
  const [eventToDisplay, setEventToDisplay] = useState([]);

  useEffect(() => {
    event_list().then((x) => {
      let event = x.data.events.filter(
        (dataPoint: any) => dataPoint._id === eventID
      )[0];
      setEventToDisplay(event);
    });
  }, []);

  const handleAddInterest = async () => {
    addInterest(eventID, username)
      .then(() => {
        Alert.alert("This event has been added to your list of interests");
      })
      .catch((err) => {
        Alert.alert("Something went wrong, please try again");
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Event Title: {eventToDisplay.title}</Text>
        <Text>Date: {eventToDisplay.createdAt}</Text>
        <Text>Event Details {eventToDisplay.details}</Text>
      </View>
      <View>
        <Button title="I'm interested!" onPress={handleAddInterest} />
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
