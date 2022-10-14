import React, { FC, useContext } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Button, EventList } from "../components";
import { useState } from "react";
import { EventContext } from "../contexts";

const HomeScreen: FC = (props) => {
  const { event } = useContext(EventContext);
  const { navigation } = props;
  const { navigate } = navigation;
  console.log("event id -->", event);


  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello {props.navigation.state.params.name}!</Text>
      <View>
        <EventList navigate={navigate} />
      </View>
      <Button
        title="Sign Out"
        onPress={() => {
          alert("Sign Out clicked");
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
