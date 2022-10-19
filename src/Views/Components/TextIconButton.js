import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Icon
import { AntDesign, Ionicons } from "@expo/vector-icons";

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { ...containerStyle }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { ...labelStyle }]}>{label}</Text>

      <AntDesign name={icon} style={iconStyle} size={20} />
    </TouchableOpacity>
  );
};

export default TextIconButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  label: {
    fontFamily: "Poppins_500Medium",
    marginTop: 5,
    fontSize: 16,
  },
});
