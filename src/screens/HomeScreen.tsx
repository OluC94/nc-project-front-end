import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: { navigation: object }) {
  //   type NavigationKey = keyof typeof navigation;
  //   const nav = "navigate" as NavigationKey;
  console.log(Object.keys(navigation));

  function handlePress(): void {
    // navigation.navigate("UserSignUp");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home page on successful user login</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
