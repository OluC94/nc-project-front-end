import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Login, SignUp, Event, HomeScreen, AddEvent } from "../screens";

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  Event: {
    screen: Event,
  },
  AddEvent: {
    screen: AddEvent,
  }
};

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
