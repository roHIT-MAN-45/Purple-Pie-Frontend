import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

// Constants
import COLORS from "../../Constants/colors";

// SVG Library
import Svg, { Path } from "react-native-svg";

const TabBarCustomButton = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  let isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.wrapper}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={styles.wrapper}></View>
        </View>
        <TouchableOpacity style={styles.primary} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.secondary}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default TabBarCustomButton;

const shadows = {
  shadowColor: COLORS.primary,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  primary: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    ...shadows,
  },
  secondary: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
  },
});
