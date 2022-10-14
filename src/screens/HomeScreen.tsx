import React, { FC, useContext } from "react";
import { SafeAreaView, Text, StyleSheet, View, AsyncStorage } from "react-native";
import { Button, EventList } from "../components";
import { useState } from "react";
import { EventContext } from "../contexts";

const HomeScreen: FC = (props) => {
  const { event } = useContext(EventContext);
  const { navigation } = props;
  const { navigate } = navigation;
  console.log("event id -->", event);

  const handleSignOut = async () => {
    let token = await AsyncStorage.getItem('key');
    if(token) {
      await AsyncStorage.removeItem('key')
      props.navigation.navigate("Login")
    }
  }

 // {props.navigation.state.params.name}
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello!</Text>
      <View>
        <EventList navigate={navigate} />
      </View>
      <Button title="Sign Out" onPress={handleSignOut}
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
