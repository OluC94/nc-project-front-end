import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button, AsyncStorage } from "react-native";
import { MainNav } from "./routes/MainNav";
import { EventContext } from "./contexts";
import axios from "axios";

export default function App() {
  console.log("running");
  const [event, setEvent] = useState<string | null>(null);

  axios.interceptors.request.use(async function (config) {
    let token = await AsyncStorage.getItem('key');
    if(config.headers){
      config.headers.Authorization = `bearer ${token}`;
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  return (
    <EventContext.Provider value={{ event, setEvent }}>
      <MainNav />
    </EventContext.Provider>
  );

}
