import React, { FC, useContext, useState } from "react";
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

const Event: FC = (props) => {
  const [newComm, setNewComm] = useState<string | null>(null);
  const { eventID } = useContext(EventContext);
  const { username } = useContext(UserContext);
  const { data } = sampleData;
  const [eventToDisplay]: any = data.filter(
    (dataPoint: any) => dataPoint[2] === eventID
  );

  const handleAddInterest = async () => {
    // implement method that adds event to user's interests
    alert("This event has been added to your list of interests");
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
