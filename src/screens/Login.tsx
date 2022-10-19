import React, { FC, useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Input } from "../components";
import { UserContext } from "../contexts/UserContext";
import { get_users, user_login } from "../utils/user_api";

const IS_TESTING = true;

const Login: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const { setUsername } = useContext(UserContext);

  useEffect(()=>{
    setUsername(null);
  }, [])

  ////////TESTING/////////////
  if (IS_TESTING) {
    useEffect(() => {
      setEmail("mark@gmail.com");
      setPassword("password");
    }, []);
  }
  ///////////////////////////

  interface Props {
    navigation: any;
  }

  const handleLogin = async () => {
    console.log(email);
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
      <Image
        style={styles.planet}
        source={require("../../assets/planeticon.png")}
      />
      <Text style={styles.login}>Log In</Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {/* <Button title="Log In" color="#2e0f38" onPress={handleLogin} /> */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        underlayColor="#fff"
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.loginText}>
        <Text style={styles.dontHave}>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={{ color: "#2E0F38" }}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8351a8",
    alignItems: "center",
    justifyContent: "center",
  },
  planet: {
    width: 150,
    height: 150,
    margin: 75,
  },
  login: {
    color: "#fff",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
  loginButton: {
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
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  dontHave: {
    color: "#fff",
    marginLeft: 5,
    marginRight: 5,
  },
});
