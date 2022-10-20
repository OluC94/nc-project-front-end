import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

interface Event {
  title: string;
  date: string;
  details: string;
  followers: number;
  navigation?: any;
}

const EventCard: FC<Event> = (props) => {
  return (
    <View style={styles.container}>
      {props.images.map((x, i) => {
        return (
          <Image
            key={i}
            style={styles.image}
            source={{ uri: `data:image/png;base64,${x.image}` }}
          />
        );
      })}
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.date}>
        {props.date}
        {"  "}|{"  "}
        {props.followers === 1 ? (
          <Text style={styles.date}>{props.followers} follower</Text>
        ) : (
          <Text style={styles.date}>{props.followers} followers</Text>
        )}
      </Text>
      <Text style={styles.details}>{props.details}</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E0F38",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 3,
    fontWeight: "bold",
    fontSize: 18,
  },
  date: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  details: {
    color: "#fff",
    paddingHorizontal: 20,
    margin: 10,
    fontStyle: "italic",
  },
});
