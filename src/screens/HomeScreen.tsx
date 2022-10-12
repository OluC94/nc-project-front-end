import React, { FC } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Button, EventList } from "../components";

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home page on successful user login</Text>
      <View>
        <EventList
          title="Meteor Shower"
          date="2022-10-16"
          details="Info on the meteor shower, it's name "
          followers={5}
        />
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
