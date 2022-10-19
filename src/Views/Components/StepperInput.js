import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import IconButton from "./IconButton";

// Constants
import COLORS from "../../Constants/colors";

const StepperInput = ({ containerStyle, value = 1, onPlus, onMinus }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <IconButton
        containerStyle={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: COLORS.grey,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
        icon="minus"
        iconStyle={{ color: COLORS.primary }}
        onPress={onMinus}
      />

      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>

      <IconButton
        containerStyle={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: COLORS.grey,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
        icon="plus"
        iconStyle={{ color: COLORS.primary }}
        onPress={onPlus}
      />
    </View>
  );
};

export default StepperInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    width: 140,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  valueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: "Poppins_500Medium",
  },
});
