import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { ...buttonContainerStyle }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { ...labelStyle }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "Poppins_500Medium",
  },
});
