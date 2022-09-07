import React from "react";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const OnboardPaginator = ({ data, scrollX }) => {
  // Getting Screen Width 👍
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        // Input range
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        // Dot width changes according to which one is active
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        // Opacity Animation
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity: opacity }]}
            key={`dot-${index}`}
          />
        );
      })}
    </View>
  );
};

export default OnboardPaginator;

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLORS.primary,
  },
});
