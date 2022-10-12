import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
