import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loading: FC = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color="#fff" opacity="0.3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
