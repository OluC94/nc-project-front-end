import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface Event {
  title: string;
  date: string;
  details: string;
  followers: number;
  navigation?: any;
}

const EventCard: FC<Event> = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>Date and time: {props.date}</Text>
      <Text>Info: {props.details}</Text>
      {props.followers === 1 ? (
        <Text>{props.followers} follower</Text>
      ) : (
        <Text>{props.followers} followers</Text>
      )}
    </View>
  );
};

export default EventCard;
