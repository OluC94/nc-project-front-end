
import React, { FC, useEffect, useState, useContext } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { Text, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { UserContext } from "../contexts/UserContext";
import BottomBar from "../screens/BottomBar";


export const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);
  const { username } = useContext(UserContext);

  return (
    <>
      <NavigationContainer>
        {username === null ? <AuthStack /> : <BottomBar/>}
      </NavigationContainer>
       
    </>
  );
};
