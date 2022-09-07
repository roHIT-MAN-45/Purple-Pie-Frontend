import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";

// SVG Library
import { G, Circle, Svg } from "react-native-svg";

// Icons
import { FontAwesome } from "@expo/vector-icons";

// Constants
import COLORS from "../../Constants/colors";

const OnboardButton = ({ percentage, onPress, slideIndex }) => {
  // Constants 🌺
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // Refs
  const progressRef = useRef(null);

  // Animation 🎬
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  // Sets Progress Bar On Component Mount 👍
  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  // Sets Progress Bar Whenever Percentage Prop Changes 👍
  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G origin={center} rotation="-90">
          {/* Circle under the progress Bar 👍 */}
          <Circle
            stroke={COLORS.grey}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />

          {/* Progress Bar 😉 */}
          <Circle
            ref={progressRef}
            stroke={COLORS.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      {/* Button  */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}
      >
        {slideIndex == 0 && (
          <FontAwesome name="credit-card" size={32} color={COLORS.white} />
        )}

        {slideIndex == 1 && (
          <FontAwesome name="heart" size={32} color={COLORS.white} />
        )}

        {slideIndex == 2 && (
          <FontAwesome name="rocket" size={32} color={COLORS.white} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default OnboardButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    padding: 20,
  },
});
