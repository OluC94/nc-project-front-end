import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
// import database

export const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);

  // create a function that determines whether user has logged in and sets user
  // create a use effect that calls the function

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
