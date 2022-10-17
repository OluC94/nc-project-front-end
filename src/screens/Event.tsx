import React, { FC, useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, EventCard, Input } from "../components";
import { sampleData } from "../utils";

const Event: FC = (props) => {
  const [newComm, setNewComm] = useState<string | null>(null);
  const { eventID } = useContext(EventContext);
  const { data } = sampleData;
  const [eventToDisplay]: any = data.filter(
    (dataPoint: any) => dataPoint[2] === eventID
  );

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
        <Text>Event Title</Text>
        <Text>Date: {eventToDisplay[3]}</Text>
        <Text>Event Details</Text>
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
