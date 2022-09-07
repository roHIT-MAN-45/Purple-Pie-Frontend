import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import Feathericons from "@expo/vector-icons/Feather";

// Constants
import COLORS from "../../Constants/colors";

const Top = () => {
  return (
    <SafeAreaView style={styles.top}>
      <Ionicons name="arrow-back-sharp" style={styles.icon} />
      <Feathericons name="more-vertical" style={styles.icon} />
    </SafeAreaView>
  );
};

export default Top;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  icon: {
    fontSize: 24,
    color: COLORS.dark,
  },
});
