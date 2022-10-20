import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, CommentList } from "../components";
import { UserContext } from "../contexts/UserContext";
import { addInterest, event_list } from "../utils/events_api";
import { unixToDate } from "../utils/date";
import { Loading } from "../components/Loading";
import { SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MoonLanding from "../components/MoonLanding";


const Event: FC = (props) => {
  const { eventID } = useContext(EventContext);
  const { username } = useContext(UserContext);
  const [eventToDisplay, setEventToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    event_list().then((x) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {eventToDisplay.images.map((x, i) => {
            return (
              <Image
                key={i}
                style={{ width: "100%", height: undefined, aspectRatio: 1 }}
                style={{ width: 100, height: 100 }}
                source={{ uri: `data:image/png;base64,${x.image}` }}
              />
            );
          })}
          <Text style={styles.event}>{eventToDisplay.event_name}</Text>
          <Text style={styles.date}>{unixToDate(eventToDisplay.time)}</Text>
          <Text style={styles.details}>{eventToDisplay.details}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.interest} onPress={handleAddInterest}>
            <Text style={styles.interestText}>I'm interested!</Text>
          </TouchableOpacity>
        </View>
        <View>
        </View>
        <CamAccess />
        <View>
          <CommentList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
      </View>
    );
  }
  return <MoonLanding />;
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d7b93",
    alignItems: "center",
    justifyContent: "center",
  },
  event: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 1,
  },
  date: {
    color: "#fff",
    marginLeft: 10,
    paddingLeft: 5,
  },
  details: {
    color: "#fff",
    margin: 10,
    paddingLeft: 5,
  },
  interest: {
    backgroundColor: "#1a2c54",
    marginRight: 125,
    marginLeft: 125,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  interestText: {
    color: "#fff",
    textAlign: "center",
  },
});
