import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  Text,
} from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const Loader = ({ visible = false }) => {
  // Getting Screen Width & Height 👍
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.loaderContainer, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      </View>
    )
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  loader: {
    height: 70,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loaderText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Poppins_500Medium",
  },
});
