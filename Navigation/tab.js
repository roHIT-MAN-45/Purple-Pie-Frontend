import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../src/Views/Screens/TabScreens/HomeScreen";
import SearchScreen from "../src/Views/Screens/TabScreens/SearchScreen";
import ProfileScreen from "../src/Views/Screens/TabScreens/ProfileScreen";
import Aboutme from "../src/Views/Screens/TabScreens/Aboutme";

import COLORS from "../src/Constants/colors";
import TabBarCustomButton from "../src/Views/Components/TabBarCustomButton";
import CustomTabBar from "../src/Views/Components/CustomTabBar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
      tabBar={(props) => {
        return <CustomTabBar props={props} />;
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="home-outline"
                style={{
                  fontSize: 25,
                  color: focused ? COLORS.white : COLORS.lightgrey,
                }}
              />
            );
          },
          tabBarButton: (props) => {
            return <TabBarCustomButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="search"
                style={{
                  fontSize: 25,
                  color: focused ? COLORS.white : COLORS.lightgrey,
                }}
              />
            );
          },
          tabBarButton: (props) => {
            return <TabBarCustomButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="user"
                style={{
                  fontSize: 25,
                  color: focused ? COLORS.white : COLORS.lightgrey,
                }}
              />
            );
          },
          tabBarButton: (props) => {
            return <TabBarCustomButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Aboutme"
        component={Aboutme}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="handshake-o"
                style={{
                  fontSize: 25,
                  color: focused ? COLORS.white : COLORS.lightgrey,
                }}
              />
            );
          },
          tabBarButton: (props) => {
            return <TabBarCustomButton {...props} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
