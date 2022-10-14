import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
// import database

export const MainNav: FC = () => {
  const [user, setUser] = useState<any>("user");

  // create a function that determines whether user has logged in and sets user
  // const handleUserChange = () => {
  //   firebase.auth().onAuthStateChange(_user => if (_user) setUser(_user))
  // }

  useEffect(() => {
    // handleUserChange()
  }, []);

  return (
    <NavigationContainer>
      {user === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
