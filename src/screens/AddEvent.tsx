import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { EventContext } from "../contexts";
import { Button, CamAccess, EventCard, Input } from "../components";
import { sampleData } from "../utils";
import { event_list } from "../utils/events_api";
import EventAdder from "../components/EventAdder";

const AddEvent: FC = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <EventAdder navigate={navigate} />
    </View>
  );
};

export default AddEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8351a8",
    alignItems: "center",
    justifyContent: "center",
  },
});
