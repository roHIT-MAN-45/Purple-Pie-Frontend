import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Vector Icons
import { Entypo } from "@expo/vector-icons";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Entypo name={icon} size={25} style={iconStyle} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
