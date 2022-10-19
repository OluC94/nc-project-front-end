import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, CommentList } from "../components";
import { UserContext } from "../contexts/UserContext";
import { addInterest, event_list } from "../utils/events_api";
import { unixToDate } from "../utils/date";
import { Loading } from "../components/Loading";

const Event: FC = (props) => {
  const { eventID } = useContext(EventContext);
  const { username } = useContext(UserContext);
  const [eventToDisplay, setEventToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    event_list()
      .then((x) => {
        let event = x.filter((dataPoint: any) => dataPoint._id === eventID)[0];
        setEventToDisplay(event);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [eventID]);

  const handleAddInterest = async () => {
    addInterest(eventID, username)
      .then(() => {
        Alert.alert("This event has been added to your list of interests");
      })
      .catch((err) => {
        Alert.alert("Something went wrong, please try again");
      });
  };

  if (isLoading) return <Loading />;
  if (eventToDisplay) {
    return (
      <View style={styles.container}>
        <View>
          <Text>Event Title: {eventToDisplay.event_name}</Text>
          <Text>Date: {unixToDate(eventToDisplay.time)}</Text>
          <Text>Event Details: {eventToDisplay.details}</Text>
          {eventToDisplay.images.map((x, i) => {
            return (
              <Image
                key={i}
                style={{ width: 100, height: 100 }}
                source={{ uri: `data:image/png;base64,${x.image}` }}
              />
            );
          })}
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
  }
  return <Text>No Event Loaded</Text>;
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
