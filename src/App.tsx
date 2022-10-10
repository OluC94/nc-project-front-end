import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import icon2 from "../assets/icon2.png";

export default function App() {
  const handlePress = () => console.log("pressed");
  console.log(icon2);
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Number of Lines trucates the text so that it does not wrap. onPress will
        console log the message
      </Text>
      <Image source={icon2} />
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
});
