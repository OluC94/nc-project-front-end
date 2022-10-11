import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SignUp, Login } from "../screens";

const screens = {
  SignUp: {
    screen: SignUp,
  },
  Login: {
    screen: Login,
  },
};

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);
