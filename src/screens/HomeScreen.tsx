import React, { FC, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  AsyncStorage,
  ScrollView,
  Image,
} from "react-native";
import { Button, EventList } from "../components";
import { useState } from "react";
import { EventContext } from "../contexts";
import AddEvent from "./AddEvent";

const HomeScreen: FC = (props) => {
  const { eventID } = useContext(EventContext);
  const { navigation } = props;
  const { navigate } = navigation;

  const handleSignOut = async () => {
    let token = await AsyncStorage.getItem("key");
    if (token) {
      await AsyncStorage.removeItem("key");
      props.navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <EventList navigate={navigate} />
        </View>
        <Image
          style={styles.planet}
          source={require("../../assets/planeticonseethru.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8351a8",
    alignItems: "center",
    justifyContent: "center",
  },
  planet: {
    alignSelf: "center",
    margin: 25,
    width: 35,
    height: 35,
  },
});
