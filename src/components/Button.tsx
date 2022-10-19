import React, { FC, ReactElement } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  navigation?: any;
  style?: any;
}

const Button: FC<Props> = (props): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
  },
});
