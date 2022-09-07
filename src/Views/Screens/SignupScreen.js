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

const SignupScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
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

    if (!inputs.name) {
      handleError("Please input name", "name");
      valid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      valid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length must be at least 5", "password");
      valid = false;
    }

    if (valid) {
      signup();
    }
  };

  const signup = async () => {
    setLoading(true);

    // Sending POST request for creating new user 🚀
    try {
      const response = await axios.post(`${envs.url}/users`, {
        name: inputs.name,
        phone: inputs.phone,
        email: inputs.email,
        password: inputs.password,
      });

      if (response.status == 201) {
        setLoading(false);
        navigation.navigate("Login");
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
        <Text style={styles.text}>Signup</Text>
        <Text style={styles.desc}>Create new account</Text>
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
            label="Name"
            iconName="account-outline"
            placeholder="Enter your name"
            error={errors.name}
            onFocus={() => handleError(null, "name")}
            onChangeText={(text) => handleOnChange(text, "name")}
          />
          <Input
            keyboardType="numeric"
            label="Phone Number"
            iconName="phone-outline"
            placeholder="Enter your phone number"
            error={errors.phone}
            onFocus={() => handleError(null, "phone")}
            onChangeText={(text) => handleOnChange(text, "phone")}
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
          <Button title="Signup" onPress={validate} />
          <Text
            style={styles.lowerText}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account ?{" "}
            <Text style={{ color: COLORS.primary }}>login</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
