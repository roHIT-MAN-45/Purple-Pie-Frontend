import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const CopyrightSmallBlock = () => {
  return (
    <Text style={styles.text}>
      © 2022 <Text style={styles.highlight}>Rohit Chavan</Text>
    </Text>
  );
};

export default CopyrightSmallBlock;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: COLORS.lightgrey,
  },
  highlight: {},
});
