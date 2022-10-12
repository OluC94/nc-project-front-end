import { useLinkProps } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Input } from "../components";

const SignUp: FC = (props) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  // change the console logs below to the set functions

  const handleSignUp = async () => {
    if (name && email && password) {
      try {
        // create a user const that awaits the user creation in the DB
        // if (user) save the information to the database)

        Alert.alert("signup complete");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Error, missing fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUp screen</Text>
      <Input placeholder="Name" onChangeText={(text) => setName(text)} />
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Already have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={{ color: "rgba(81,135,200,1)" }}>Log In Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
