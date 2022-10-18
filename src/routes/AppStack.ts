import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Event, HomeScreen, AddEvent, Login, SignUp } from "../screens";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  Event: {
    screen: Event,
  },
  AddEvent: {
    screen: AddEvent,
  },
 
};

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
