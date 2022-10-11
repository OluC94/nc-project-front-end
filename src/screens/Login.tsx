import React, { FC, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button, Input } from "../components";

const Login: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Log In screen</Text>
      <Input placeholder="Email" onChangeText={(text) => console.log(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => console.log(text)}
      />
      <Button title="Log in" onPress={() => alert("Signed up complete")} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={{ color: "rgba(81,135,200,1)" }}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
