import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const TechStack = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TechStack;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "30%",
    marginVertical: 8,
    backgroundColor: COLORS.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
    color: COLORS.primary,
    marginTop: 5,
    textAlign: "center",
  },
});
