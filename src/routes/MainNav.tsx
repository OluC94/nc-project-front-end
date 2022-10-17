import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";


export const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);

  return (
    <NavigationContainer>
      {user === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
