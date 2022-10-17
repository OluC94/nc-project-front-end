import React, { FC, useEffect, useState } from "react";
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
  import spaceApi from "../utils/api";
  import { event_post } from "../utils/events_api";

const EventCreate: FC = (props) => {
    const [eventName, setEventName] = useState<string | null>(null);
    const [eventDetails, setEventDetails] = useState<string | null>(null);
    const [eventDate, setEventDate] = useState<string | null>(null);


      const handleSubmit = async () => {
        if(eventName && eventDetails && eventDate) {
            event_post({
              eventName: eventName,
              eventDetails: eventDetails,
              eventDate: eventDate,
            }).then(async (result) => {
              if(result.stats === 200) {
                return console.log('post successful!')
              }
            })
        } else {
          Alert.alert("Error, missing fields");
        };
      };




    // export const uploadSubmit = async data => {
    //     try {
    //         const result = await spaceApi('events/:event_id', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'multipart/form-data'
    //             },
    //         })
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
          <Text>Add event screen, </Text>
          <Input placeholder="Event Name Here.." onChangeText={(text) => setEventName(text)} />
          <Input placeholder="Details Here.." onChangeText={(text) => setEventDetails(text)}/>
          <Input placeholder="Date Of Event Here.." onChangeText={(text) => setEventDate(text)}/>
            <View style={{
                flex:1,
                alignItems : 'center',
                justifyContent: 'center'
            }}> <Button title="upload" onPress={uploadSubmit}></Button>
        </View>
          <Button title="Submit" onPress={handleSubmit} />
        </SafeAreaView>
      );












}

  export default EventCreate;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    eventText: {
      flexDirection: "row",
      marginVertical: 20,
    },
  });