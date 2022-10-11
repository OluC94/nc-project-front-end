import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Event, HomeScreen } from "../screens";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  Event: {
    screen: Event,
  },
};

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
