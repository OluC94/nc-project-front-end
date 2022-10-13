import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { sampleData } from "../utils";

interface Event {
  title: string;
  date: string;
  details: string;
  followers: number;
  navigation?: any;
}

const EventCard: FC<Event> = (props) => {
  const { data } = sampleData;

  return (
    <View>
      <Text>Event card</Text>
      <Text>{props.title}</Text>
      <Text>Date and time: {props.date}</Text>
      <Text>Info: {props.details}</Text>
      <Text>{props.followers} followers</Text>
    </View>
  );
};

export default EventCard;
