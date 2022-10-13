import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import { MainNav } from "./routes/MainNav";
import { EventContext } from "./contexts";

export default function App() {
  console.log("running");
  const [event, setEvent] = useState<string | null>(null);

  return (
    <EventContext.Provider value={{ event, setEvent }}>
      <MainNav />
    </EventContext.Provider>
  );
}
