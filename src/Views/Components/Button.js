import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const Button = ({ title, onPress = () => {}, buttonStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 5,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
