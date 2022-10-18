import React, { FC, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  AsyncStorage,
  ScrollView,
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

  // console.log(props.navigation.state.params.name);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <View>
        <AddEvent navigate={navigate}/>
      </View>
      <Text>Hello!</Text>
      <View>
        <EventList navigate={navigate} />
      </View>
      <Button title="Sign Out" onPress={handleSignOut}
      />
      </ScrollView>
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
