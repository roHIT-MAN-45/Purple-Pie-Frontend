import React from "react";
import { StyleSheet, View, Platform, Dimensions } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

// Constants
import COLORS from "../../Constants/colors";

// Dimensions
const dimensions = Dimensions.get("window");

const CustomTabBar = (props) => {
  if (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 ||
      dimensions.width === 812 ||
      dimensions.height === 896 ||
      dimensions.width === 896)
  ) {
    return (
      <View>
        <View style={styles.container}></View>
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white,
  },
});
