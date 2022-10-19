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

  const handleSignUp = async () => {
    if (name && email && password) {
      user_register({
        name: name,
        email: email,
        password: password,
      }).then(async (result) => {
        if (result.status === 201) {
          await AsyncStorage.setItem("key", result.data.token);
          get_users().then(async (result2) => {
            props.navigation.navigate("HomeScreen", {
              name: result2.data.user.name,
            });
          });
        }
      });
    } else {
      Alert.alert("Error, missing fields");
    }
  };

  const getUsers = async () => {
    if (email && password) {
      get_users().then(async (result) => {});
    } else {
      Alert.alert("Error, missing fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <Input placeholder="Name" onChangeText={(text) => setName(text)} />
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {/* <Button title="Sign Up" onPress={handleSignUp} /> */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignUp}
        underlayColor="#fff"
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginText}>
        <Text style={styles.donthave}>Already have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={{ color: "#2e0f38" }}>Log In Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8351a8",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    color: "#fff",
  },
  signupButton: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#2e0f38",
    borderRadius: 10,
  },
  signupButtonText: {
    color: "#fff",
  },
  donthave: {
    color: "#fff",
    marginLeft: 5,
    marginRight: 5,
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
