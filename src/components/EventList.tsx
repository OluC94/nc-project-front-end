import React, { FC } from "react";
import { View, Text } from "react-native";
import { sampleData } from "../utils";

interface Event {
  title: string;
  date: string;
  details: string;
  followers: number;
}

const { data } = sampleData;

const EventList: FC<Event> = (props) => {
  console.log(data[0][3]);
  return (
    <View>
      <Text>Event list</Text>
      <Text>{props.title}</Text>
      <Text>Date and time: {props.date}</Text>
      <Text>Info: {props.details}</Text>
      <Text>{props.followers} followers</Text>
    </View>
  );
};

export default EventList;
