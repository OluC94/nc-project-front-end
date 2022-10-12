import React, { FC } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* import Button from components, set title to "Sign Out" and onPress to handler function */}
      <Text>Home page on successful user login</Text>
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
