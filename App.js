import React, { useEffect, useState } from "react";

import { LogBox } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Async Storage Module
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import LoginScreen from "./src/Views/Screens/LoginScreen.js";
import SignupScreen from "./src/Views/Screens/SignupScreen.js";
import FeatureScreen from "./src/Views/Screens/FeatureScreen/FeatureScreen.js";
import OnboardScreen from "./src/Views/Screens/OnboardScreen/Onboard.js";

// font
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

// Tabs
import Tabs from "./Navigation/tab.js";

// Constants
import COLORS from "./src/Constants/colors.js";

const Stack = createNativeStackNavigator();

// App Theme
const APPTHEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default function App() {
  // Ignoring Yellow All Warnings 💀
  // Currently there are two warnings 1) expo-app-loading 2) ComponentWillMount 😁
  LogBox.ignoreAllLogs(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // Initial Route State 👍
  const [initialRouteName, setInitialRouteName] = useState("Onboard");

  // Checking if there is token in Async storage or not ⚡
  const isLoggedIn = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));

    if (userInfo?.token) {
      setInitialRouteName("Tabs");
    }
  };

  // Running when user opens app ⭐
  useEffect(() => {
    isLoggedIn();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer theme={APPTHEME}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Feature" component={FeatureScreen} />
        <Stack.Screen name="Onboard" component={OnboardScreen} />

        {/* Tabs */}
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
