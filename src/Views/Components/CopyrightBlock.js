import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const CopyrightBlock = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Copyright © Purple Pie Created By{" "}
        <Text style={styles.highlight}>Rohit Sunil Chavan</Text> All Rights
        Reserved.
      </Text>
    </View>
  );
};

export default CopyrightBlock;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "Poppins_500Medium",
    color: COLORS.primary,
  },
});
