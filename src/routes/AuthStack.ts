import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SignUp, Login, HomeScreen, AddEvent, Event} from "../screens";
import BottomBar from "../screens/BottomBar";

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
  },
};

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);

