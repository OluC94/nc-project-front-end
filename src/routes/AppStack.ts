import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Login, SignUp, Event, HomeScreen } from "../screens";

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

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
