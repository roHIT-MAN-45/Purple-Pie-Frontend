import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const OnboardItem = ({ item }) => {
  // Getting Screen Width 👍
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width }]} />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5, // makes more clean ⚡
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: COLORS.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
    paddingHorizontal: 55,
    fontSize: 15,
    textAlign: "center",
  },
});
