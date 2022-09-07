import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const ImageButton = ({ onPress, title, image }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 4,
    marginVertical: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonText: {
    marginTop: 3,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.white,
  },
});
