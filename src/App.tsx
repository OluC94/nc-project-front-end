import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  AsyncStorage,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { MainNav } from "./routes/MainNav";
import { EventContext } from "./contexts";
import axios from "axios";
import { UserContext } from "./contexts/UserContext";
import 'react-native-gesture-handler';

export default function App() {
  console.log("running");
  const [eventID, setEventID] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  axios.interceptors.request.use(
    async function (config) {
      let token = await AsyncStorage.getItem("key");
      if (config.headers) {
        config.headers.Authorization = `bearer ${token}`;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    
      <EventContext.Provider value={{ eventID, setEventID }}>
        <UserContext.Provider value={{ username, setUsername }}>
          <MainNav />
        </UserContext.Provider>
      </EventContext.Provider>
  );
};
