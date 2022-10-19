import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

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
      {
        props.images.map((x,i) => {
          return (
            <Image 
              key={i}
              style={{width: 100,height: 100,}}
              source={{uri: `data:image/png;base64,${x.image}`}}
            />
          )
        })
      }
    </View>
  );
};

export default EventCard;
