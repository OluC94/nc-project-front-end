import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SignUp, Login } from "../screens";

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
};

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);
