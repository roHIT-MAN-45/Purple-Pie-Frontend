import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";

// Constants
import COLORS from "../../Constants/colors";

const Ratings = ({ ratings, iconStyle, containerStyle }) => {
  return (
    <View style={[styles.ratings, { ...containerStyle }]}>
      <AntDesign
        color={COLORS.primary}
        size={16}
        style={{ ...iconStyle }}
        name={ratings >= 1 ? "star" : "staro"}
      />

      <AntDesign
        color={COLORS.primary}
        size={16}
        style={{ ...iconStyle }}
        name={ratings >= 2 ? "star" : "staro"}
      />

      <AntDesign
        color={COLORS.primary}
        size={16}
        style={{ ...iconStyle }}
        name={ratings >= 3 ? "star" : "staro"}
      />

      <AntDesign
        color={COLORS.primary}
        size={16}
        style={{ ...iconStyle }}
        name={ratings >= 4 ? "star" : "staro"}
      />

      <AntDesign
        color={COLORS.primary}
        size={16}
        style={{ ...iconStyle }}
        name={ratings >= 5 ? "star" : "staro"}
      />
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  ratings: {
    flexDirection: "row",
  },
});
