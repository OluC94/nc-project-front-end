import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import icon2 from "../assets/icon2.png";

export default function App() {
  const handlePress = () => console.log("pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Number of Lines trucates the text so that it does not wrap. onPress will
        console log the message
      </Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <View>
          <Image style={styles.image} source={icon2} />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
