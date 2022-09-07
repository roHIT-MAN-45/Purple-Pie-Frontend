import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// Icons
import { Octicons } from "@expo/vector-icons";

// Constants
import COLORS from "../../Constants/colors";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item }) => {
  return (
    <TouchableOpacity style={containerStyle}>
      {/* Image */}
      <Image
        source={{ uri: item.image.toString() }}
        style={imageStyle}
        resizeMode="contain"
      />

      {/* Info */}
      <View style={styles.infoSection}>
        {/* Name */}
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Poppins_600SemiBold",
            color: COLORS.dark,
          }}
        >
          {item.name}
        </Text>

        {/* Description */}
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            color: COLORS.lightgrey,
          }}
        >
          {item.description}
        </Text>

        {/* Price */}
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            color: COLORS.dark,
          }}
        >
          ${item.price}
        </Text>
      </View>

      {/* Calories */}
      <View style={styles.caloriesSection}>
        <Octicons name="flame" size={18} color={COLORS.primary} />
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: COLORS.lightgrey,
            fontSize: 13,
            marginLeft: 5,
          }}
        >
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

const styles = StyleSheet.create({
  infoSection: {
    flex: 1,
    marginLeft: 15,
  },
  caloriesSection: {
    flexDirection: "row",
    position: "absolute",
    top: 5,
    right: 15,
  },
});
