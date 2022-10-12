import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const Event: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Event Page</Text>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
