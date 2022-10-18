import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Planets from "../components/Planets";


const PlanetScreen: FC = (props) => {

    return (
        <View style={styles.container}>
            <Planets />
        </View>
    )
}

export default PlanetScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  