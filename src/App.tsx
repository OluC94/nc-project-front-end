import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import { MainNav } from "./routes/MainNav";

export default function App() {
  console.log("running");

  return <MainNav />;
}
