import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SignUp, Login, HomeScreen, Event } from "../screens";

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
};

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);
