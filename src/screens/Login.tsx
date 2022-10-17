import React, { FC, useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";
import { Button, Input } from "../components";
import { UserContext } from "../contexts/UserContext";
import { get_users, user_login } from "../utils/user_api";

const Login: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const { setUsername } = useContext(UserContext);

  const handleLogin = async () => {
    if (email && password) {
      user_login({
        email: email,
        password: password,
      }).then(async (result) => {
        if (result.status === 200) {
          await AsyncStorage.setItem("key", result.data.token);
          get_users().then(async (result2) => {
            props.navigation.navigate("HomeScreen", {
              name: result2.data.user.name,
            });
            setUsername(result2.data.user.name);
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
      <Text>Log In screen</Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Log in" onPress={handleLogin} />

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
