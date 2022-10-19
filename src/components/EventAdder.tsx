import React, { FC, useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";

import { Button, Input } from "../components";
import { event_post } from "../utils/events_api";
import * as ImagePicker from "expo-image-picker";
import { user_login } from "../utils/user_api";
import { UserContext } from "../contexts/UserContext";
import { dateToUnix, unixToDate } from "../utils/date";

const EventAdder: FC = ({ navigate }) => {
  const [eventName, setEventName] = useState<string | null>(null);
  const [eventDetails, setEventDetails] = useState<string | null>(null);
  const [eventDate, setEventDate] = useState<string | null>(null);
  const [image, setImage] = useState<any>("");
  const { username } = useContext(UserContext);

  const handleSubmit = async () => {
    const unixDate = dateToUnix(eventDate)
    if (eventName && eventDetails && eventDate) {
      event_post({
        username: username,
        event_name: eventName,
        details: eventDetails,
        time: unixDate,
        image: image,
      })
        .then(async (result) => {
          if (result.status === 201) {
            Alert.alert("Your event has been added!");
            navigate("Home", { screen: "HomeScreen" });
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Something went wrong, please try again");
        });
    } else {
      Alert.alert("Error, missing fields");
    }
  };

  const getImagesFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text> Add Event</Text>
      <Input
        placeholder="Event Name Here.."
        onChangeText={(text) => setEventName(text)}
      />
      <Input
        placeholder="Details Here.."
        onChangeText={(text) => setEventDetails(text)}
      />
      <Input
        placeholder="Date And Time of Event.. MM/DD/YYYY 00:00"
        onChangeText={(text) => setEventDate(text)}
      />
      <TouchableOpacity
        style={{ marginHorizontal: 5 }}
        onPress={getImagesFromGallery}
      >
        <Text style={{ color: "rgba(81,135,200,1)" }}>upload Images</Text>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default EventAdder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  eventText: { flexDirection: "row", marginVertical: 20 },
});

function manipulateAsync(
  arg0: any,
  arg1: ({ rotate: number } | { flip: any })[],
  arg2: { compress: number; format: any }
) {
  throw new Error("Function not implemented.");
}
