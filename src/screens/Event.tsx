import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, EventCard, Input } from "../components";
import { sampleData } from "../utils";
import { event_list } from "../utils/events_api";

const Event: FC = (props) => {
  const [newComm, setNewComm] = useState<string | null>(null);
  const { eventID } = useContext(EventContext);
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

  const handleAddComm = async () => {
    // render optimistically

    if (newComm) {
      // implement comment addition
      alert("comment added!");
    } else {
      alert("Cannot submit a blank comment");
    }
  };

  const handleAddInterest = async () => {
    // implement method that adds event to user's interests
    alert("This event has been added to your list of interests");
  };

  const handleLike = async () => {
    // implement method that adds event to user's interests
    alert("Like pressed\nNotify me may make like/dislike redundant?");
  };
  const handleDislike = async () => {
    // implement method that adds event to user's interests
    alert("Dislike pressed\nNotify me may make like/dislike redundant?");
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
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Button style={{ border: 20 }} title="👍" onPress={handleLike} />
        <Button style={{ margin: 20 }} title="👎" onPress={handleDislike} />
      </View>
      <CamAccess />
      <View>
        <Input
          placeholder="Add your comment..."
          onChangeText={(text) => setNewComm(text)}
        />
        <Button title="Add comment" onPress={handleAddComm} />
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
