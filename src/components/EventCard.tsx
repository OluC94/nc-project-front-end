import React, { FC } from "react";
import { Text, View, Image } from "react-native";

interface Event {
  title: string;
  date: string;
  details: string;
  followers: number;
  navigation?: any;
}
interface EventProps {
  title: string;
  date: string;
  details: string;
  followers: number;
  images: any;
}

const EventCard: FC<EventProps> = (props) => {
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
      {props.images.map((x: any, i: number) => {
        return (
          <Image
            key={i}
            style={{ width: 100, height: 100 }}
            source={{ uri: `data:image/png;base64,${x.image}` }}
          />
        );
      })}
    </View>
  );
};

export default EventCard;
