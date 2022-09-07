import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

// MultiSlider Library
import MultiSlider from "@ptomasroos/react-native-multi-slider";

// Constants
import COLORS from "../../Constants/colors";

const { height, width } = Dimensions.get("window");

const RangeSlider = ({ values, min, max, prefix, postfix, onValuesChange }) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={width - 24 * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightgrey,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View style={styles.customMarker}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            />
            <Text
              style={{
                marginTop: 5,
                color: COLORS.lightgrey,
                fontFamily: "Poppins_500Medium",
              }}
            >
              {prefix} {e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  customMarker: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
