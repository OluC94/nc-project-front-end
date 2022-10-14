import { useLinkProps } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";
import { Button, Input } from "../components";
import { user_register, get_users } from "../utils/user_api";

const SignUp: FC = (props) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  // change the console logs below to the set functions

  const handleSignUp = async () => {
    if (name && email && password) {
      user_register({
        name: name,
        email: email,
        password: password,
      }).then(async (result) => {
        if(result.status === 201) {
         await AsyncStorage.setItem('key', result.data.token)
         get_users().then(async (result2) => {
          props.navigation.navigate("HomeScreen", {name: result2.data.user.name})
         })
        }
      })
    } else {
      Alert.alert("Error, missing fields");
    }
  };

  const getUsers = async () => {
    if (email && password) {
      get_users().then(async (result) => {
      })
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
