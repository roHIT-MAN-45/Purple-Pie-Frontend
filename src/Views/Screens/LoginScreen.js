import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Keyboard,
} from "react-native";

// env
import envs from "../../../Config/env";

// Axios
import axios from "axios";

// Constants
import COLORS from "../../Constants/colors";

// Components
import Input from "../Components/Input";
import Button from "../Components/Button";
import Loader from "../Components/Loader";

// Async Storage Module
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();

    let valid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      valid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      valid = false;
    }

    if (valid) {
      login();
    }
  };

  const login = async () => {
    setLoading(true);

    // Sending POST request for logging user in 🚀
    try {
      const response = await axios.post(
        `${envs.url}/login`,
        {
          username: inputs.email,
          password: inputs.password,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status == 200) {
        // Setting User Info here 😉
        await AsyncStorage.setItem("UserInfo", JSON.stringify(response.data));

        setLoading(false);
        navigation.navigate("Tabs");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (err, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: err }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={styles.text}>Login</Text>
        <Text style={styles.desc}>Welcome back</Text>
        <View style={styles.formContainer}>
          <Input
            label="Email"
            iconName="email-outline"
            placeholder="Enter your email address"
            error={errors.email}
            onFocus={() => handleError(null, "email")}
            onChangeText={(text) => handleOnChange(text, "email")}
          />
          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Enter your password"
            password
            error={errors.password}
            onFocus={() => handleError(null, "password")}
            onChangeText={(text) => handleOnChange(text, "password")}
          />
          <Button title="Login" onPress={validate} />
          <Text
            style={styles.lowerText}
            onPress={() => navigation.navigate("Signup")}
          >
            Don't have an account ?{" "}
            <Text style={{ color: COLORS.primary }}>Signup</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: COLORS.primary,
    fontSize: 40,
    fontFamily: "Poppins_600SemiBold",
  },
  desc: {
    color: COLORS.lightgrey,
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "Poppins_500Medium",
  },
  formContainer: {
    marginVertical: 20,
  },
  lowerText: {
    color: COLORS.dark,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
