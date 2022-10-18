import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, EventCard, Input } from "../components";
import { sampleData } from "../utils";
import { event_list } from "../utils/events_api";import EventAdder from "../components/EventAdder";


const AddEvent: FC = (props) => {

    return (
        <View style={styles.container}>
            <EventAdder />
        </View>
    )
}

export default AddEvent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  